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
  margin-top: 50px;
  background-color: white;
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
      opacity: 0;
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

  button {
    margin: 9px 0 0 360px;
  }
`;

let socket;

const Modal = (match) => {
  const [state, setState] = useState({ name: "", message: "" });
  const [chat, setChat] = useState([]);
  const [open, setOpen] = useState(false);
  const studentInfo = getDataFromStorage();

  const { createChatApi, chatList, listAllChats } = useChats();

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
    socket.on("message", (content) => {
      console.log(content);
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
        assignmentTeamId: 1,
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
          <Box></Box>
        </ModalBox>
      )}
      <Btn onClick={onToggle} open={open} />
    </>
  );
};

export default Modal;
