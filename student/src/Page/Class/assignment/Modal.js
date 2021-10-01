import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import io from "socket.io-client";
import styled from "styled-components";
import { useChats } from "../../../components/Use";
import { getDataFromStorage } from "../../../utils/storage";
import { concatChat } from "../../../store/reducer/chats";
import Draggable from "react-draggable";
import Chat from "../../../images/chat.png";
import ModalChatRoom from "./ModalChatRoom";

const Btn = styled.button`
  background: none;
  border: none;
  width: 130px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 16px;
  color: #89c0b7;
`;

const ChatImg = styled.img`
  width: 40px;
`;
const Modal = (match) => {
  const [data, setData] = useState(false);

  const onToggle = () =>
    setData({
      ...data,
      open: !data.open,
    });

  return (
    <>
      {data.open && <ModalChatRoom match={match} setOpen={setData} />}
      <div>
        <ChatImg src={Chat} alt="chat" />
        <Btn onClick={onToggle} open={data}>
          팀 커뮤니티 창
        </Btn>
      </div>
    </>
  );
};

export default Modal;
