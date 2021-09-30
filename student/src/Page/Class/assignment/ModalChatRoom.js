import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import io from "socket.io-client";
import styled from "styled-components";
import { useChats } from "../../../components/Use";
import { getDataFromStorage } from "../../../utils/storage";
import { concatChat } from "../../../store/reducer/chats";
import Draggable from "react-draggable";
import Chat from "../../../images/chat.png";

const Box = styled.div`
  width: 400px;
  height: 600px;
  background-color: white;
  border: 1px solid #89c0b7;
  overflow-y: auto;
  flex-direction: column-reverse;
`;

const Top = styled.div`
  width: 400px;
  height: 50px;
  color: white;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;

  div {
    margin-left: 170px;
    margin-top: 10px;
  }
  button {
    font-weight: bold;
    background-color: transparent;
    color: #000000;
    border: 0;
    border-radius: 10px;
    height: 35px;
    width: 60px;
    margin-right: 10px;
    font-size: 30px;
  }
`;

const Bottom = styled.div`
  width: 400px;
  height: 50px;
  display: flex;
  justify-content: space-between;

  button {
    font-weight: bold;
    background-color: white;
    color: #89c0b7;
    border: 0;
    border-radius: 10px;
    height: 35px;
    width: 60px;
    margin-top: 5px;
    margin-right: 15px;
    font-size: 15px;
  }

  input {
    border: 0;
    width: 300px;
    height: 30px;
    background-color: #89c0b7;
    margin-left: 20px;
    margin-top: 5px;
    outline: 2px solid #89c0b7;
  }
`;

const UserBox = styled.div``;

const LeftBox = styled.div`
  font-family: Roboto;
  position: relative;

  height: fit-content;

  background-color: #ebe7e7;
  font-weight: bold;

  width: fit-content;
  padding: 0.84rem;
  max-width: 70%;
  margin-left: 2.5rem;
  margin-top: 15px;
  border-radius: 10px;
`;

const RightBox = styled.div`
  font-family: Roboto;
  height: fit-content;
  width: fit-content;

  max-width: 70%;
  text-align: right;
  background-color: #89c0b7;

  font-weight: bold;
  position: relative;
  padding: 0.84rem;
  margin: 15px 2.5rem 0 auto;
  border-radius: 10px;
`;

const ModalBox = styled.div`
  z-index: 99;
  width: 400px;
  height: 700px;
  background-color: #89c0b7;
  animation: modal-bg-show 0.3s;
  position: fixed;
  left: 50%;
  top: 15%;
  border-radius: 30px;
  @keyframes modal-show {
    from {
      opacity: "0";
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

let socket;
const ModalChatRoom = ({ match }) => {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [data, setData] = useState({ name: "", message: "", open: false });

  const studentInfo = getDataFromStorage();
  const dispatch = useDispatch();
  const scrollRef = useRef();

  const onToggle = () =>
    setData({
      ...data,
      open: !data.open,
    });

  const { createChatApi, chatList, listAllChats } = useChats();

  const fetch = async () => {
    socket = io.connect(`http://localhost:3000/${match.assignmentTeamId}`, {
      path: "/socket.io",
      rejectUnauthorized: false,
    });
    await listAllChats(match.assignmentTeamId);
    scrollToBottom();
  };

  useEffect(() => {
    fetch();
  }, []);

  useEffect(() => {
    socket.on("message", (message) => {
      if (message) {
        dispatch(concatChat(message[0]));
      }
    });
    return socket.disconnect();
  }, []);

  const scrollToBottom = () => {
    scrollRef.current.scrollIntoView();
  };

  const trackPos = (data) => {
    setPosition({ x: data.x, y: data.y });
  };

  const onTextChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const sendMessage = async () => {
    try {
      const msg = data.message.replace(/\s/gi, "");
      if (msg === "") {
        throw "";
      }
      const body = {
        assignmentTeamId: match.assignmentTeamId,
        memberId: studentInfo.id,
        contents: data.message,
      };

      await createChatApi(body);

      setData({
        ...data,
        message: "",
      });
      scrollToBottom();
    } catch (e) {
      alert(e);
    }
  };
  return (
    <Draggable onDrag={(data) => trackPos(data)}>
      <ModalBox>
        <Top>
          <div>수업 명1</div>
          <button onClick={onToggle} open={data.open}>
            X
          </button>
        </Top>
        <Box>
          {chatList.results.map((chat) => {
            if (chat.id === studentInfo.id) {
              return (
                <>
                  <RightBox>{chat.contents}</RightBox>
                </>
              );
            } else {
              return (
                <>
                  <LeftBox>{chat.contents}</LeftBox>
                </>
              );
            }
          })}
          <div ref={scrollRef} style={{ padding: "5px" }} />
        </Box>
        <Bottom>
          <input name="message" value={data.message} onChange={onTextChange} />
          <button onClick={sendMessage}>전송</button>
        </Bottom>
      </ModalBox>
    </Draggable>
  );
};

export default ModalChatRoom;
