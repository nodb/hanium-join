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
  width: 297px;
  background-color: #fff;
  height: 325px;
  border-radius: 15px;
`;

const Header = styled.div`
  width: 100%;
  height: 71px;
  box-sizing: border-box;
  padding-left: 26px;
  padding-right: 24px;
  margin-bottom: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Kanit;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.48;
  color: #101010;
  border-bottom: 1px solid #dee2e6;
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
margin-left: 26px;
margin-top: 14px;
margin-bottom: 21px;
width: 243px;
height: 32px;
::placeholder {
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  
  color: #7C7979;
}
`;

const Buttons = styled.div`
margin-left: 190px;
margin-top: 19px;
`

const AddButton = styled.span`
  background: none;
  border: none;
  cursor: pointer;
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;

  color: #EF8F88;
`;

const CloseButton = styled.span`
margin-right: 11px;
  background: none;
  border: none;
  cursor: pointer;
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;

  color: #A8A7A7;
`;

const Text = styled.div`
font-family: Roboto Condensed;
font-style: normal;
font-weight: normal;
font-size: 15px;
line-height: 18px;
padding-left: 26px;
color: #000000;
`

function P07_Assign({ open, close }) {
  return (
    <>
      {open && (
        <Block State={open}>
          <ModalBlock>
            <Header>자동 편성</Header>
            <Text>팀 개수</Text>
            <CodeInput type="input" placeholder="편성할 팀 개수를 입력하여 주세요. ex)5"/>
            <Text>학생 수</Text>
            <CodeInput type="input" placeholder="팀 당 학생 수를 입력하여 주세요. ex)4"/>
            <Buttons>
              <CloseButton onClick={close}>
                취소
              </CloseButton>
              <AddButton onClick={close}>
                완료
              </AddButton>
            </Buttons>
          </ModalBlock>
        </Block>
      )}
    </>
  );
}

export default P07_Assign;
