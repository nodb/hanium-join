import React, { useState, useEffect } from "react";
import { Input, FormGroup, Col, Button, Form } from "reactstrap";
import io from "socket.io-client";
import styled from "styled-components";
import { useChats } from "../../../components/Use";
import { getDataFromStorage } from "../../../utils/storage";

const Btn = styled.button`
  width: 50px;
  height: 50px;
  background: black;
`;

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
      opacity: '0',
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

const Modal = (match) => {
  const [state, setState] = useState({ name: "", message: "" });
  const [chat, setChat] = useState([]);
  const [open, setOpen] = useState(false);
  const studentInfo = getDataFromStorage();

  const { createChatApi, chatList, listAllChats, concatChat } = useChats();

  const onToggle = () => setOpen(!open);
  useEffect(() => {
    socket = io.connect(`http://localhost:3000/${match.assignmentTeamId}`, {
      path: "/socket.io",
      rejectUnauthorized: false,
    });
  }, []);

  useEffect(() => {
    const fetch = async () => {
      await listAllChats(match.assignmentTeamId);
      console.log(chatList);
    };
    fetch();
  }, []);

  useEffect(() => {
    const fetch = async (message) => {
      await concatChat(message);
    };

    socket.on("message", (message) => {
      if (message) {
        console.log(message);
        fetch(message);
      }
    });
  }, []);

  const onTextChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const sendMessage = async () => {
    try {
      const body = {
        assignmentTeamId: match.assignmentTeamId,
        memberId: studentInfo.id,
        contents: state.message,
      };

      await createChatApi(body);

      setState({
        ...state,
        message: "",
      });
    } catch (e) {
      alert(e);
    }
  };

  return (
    <>
      {open && (
        <ModalBox>
          <Top>
            <div>수업 명1</div>
            <button onClick={onToggle} open={open}>
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
          </Box>
          <Bottom>
            <input
              name="message"
              value={state.message}
              onChange={onTextChange}
            />
            <button onClick={sendMessage}>전송</button>
          </Bottom>
        </ModalBox>
      )}
      <Btn onClick={onToggle} open={open} />
    </>
  );
};

export default Modal;
