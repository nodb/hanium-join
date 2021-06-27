import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 50px;
  height: 50px;
  background: black;
`;

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

function Modal() {
  const [open, setOpen] = useState(false);

  const onToggle = () => setOpen(!open);

  return (
    <>
      {open && (
        <ModalBox>
          <button onClick={onToggle} open={open}>
            X
          </button>
        </ModalBox>
      )}
      <Button onClick={onToggle} open={open} />
    </>
  );
}

export default Modal;
