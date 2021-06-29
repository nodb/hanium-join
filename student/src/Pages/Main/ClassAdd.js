import React from "react";
import styled from "styled-components";

const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background: rgb(25, 25, 25, 0.64);
`;
const ModalBlock = styled.div`
  width: 400px;
  background-color: #fff;
  height: 250px;
  overflow-y: scroll;
  border-radius: 15px;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.25);
  }
  &::-webkit-scrollbar-button {
    width: 0;
    height: 0;
  }
  @media screen and (max-width: 767px) {
    width: 336px;
  }
`;
const Header = styled.div`
  width: 100%;
  height: 71px;
  box-sizing: border-box;
  padding-left: 50px;
  padding-right: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Kanit;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.48;
  color: #101010;
  border-bottom: 1px solid #dee2e6;
  @media screen and (max-width: 767px) {
    height: 64px;
    font-size: 18px;
    padding-left: 16px;
    padding-right: 16px;
  }
  .button {
    position: relative;
    width: 25px;
    height: 25px;
    cursor: pointer;
    span {
      position: absolute;
      height: 2px;
      width: 20px;
      border-radius: 7px;
      background-color: #b0b0b0;
      top: 10px;
      right: 5px;
    }
    span:nth-child(1) {
      transform: rotate(-45deg);
    }
    span:nth-child(2) {
      transform: rotate(45deg);
    }
  }
`;

const CodeInput = styled.input`
  width: 300px;
  height: 30px;
`;

const AddButton = styled.button`
  width: 50px;
  background: none;
  border: none;
  cursor: pointer;
  color: red;
`;

function S04_ClassAdd({ open, close }) {
  return (
    <>
      {open && (
        <Block State={open}>
          <ModalBlock>
            <Header>수업 코드</Header>
            <div style={{ padding: "45px" }}>
              <CodeInput type="text"></CodeInput>
            </div>
            <div style={{ padding: "0 40px 0 40px", display: "flex" }}>
              <AddButton onClick={close}>취소</AddButton>
              <AddButton style={{ marginLeft: "220px" }}>추가</AddButton>
            </div>
          </ModalBlock>
        </Block>
      )}
    </>
  );
}

export default S04_ClassAdd;
