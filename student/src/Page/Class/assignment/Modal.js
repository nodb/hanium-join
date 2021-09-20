import React, { useState, useEffect } from "react";
import { Input, FormGroup, Col, Button, Form } from "reactstrap";
import io from "socket.io-client";
import styled from "styled-components";

const Btn = styled.button`
  width: 50px;
  height: 50px;
  background: black;
`;

const Box = styled.div``;

const ModalBox = styled.div`
  z-index: 99;
  width: 400px;
  height: 700px;
  background-color: grey;
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

function Modal() {
  const [open, setOpen] = useState(false);

  const onToggle = () => setOpen(!open);

  useEffect(() => {
    socket = io(`ws://localhost:3000/1`, {
      secure: true,
    });
    // if (user) {
    //   socket.emit("join", { roomId, user }, (error) => {
    //     if (error) {
    //       alert(error);
    //     }
    //   });
    // }
  }, []);

  return (
    <>
      {open && (
        <ModalBox>
          <button onClick={onToggle} open={open}>
            X
          </button>
          <div>안녕하세요</div>
          <Box style={{ display: "flex" }}>
            <Input type="" style={{ width: "330px", marginLeft: "5px" }} />
            <Button>확인</Button>
          </Box>
        </ModalBox>
      )}
      <Btn onClick={onToggle} open={open} />
    </>
  );
}

export default Modal;
