import React, { useState } from "react";
import styled from "styled-components";
import { useClasses } from "../../../components/Use";
import { getDataFromStorage } from "../../../utils/storage";

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
  width: 350px;
  background-color: #fff;
  height: 450px;
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
`;

const Header = styled.div`
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  padding-left: 25px;
  display: flex;
  align-items: center;
  font-family: Kanit;
  font-size: 18px;
  font-weight: bold;
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
  width: 250px;
  height: 30px;
`;

const AddButton = styled.button`
  width: 200px;
  font-size: 15px;
  background: none;
  border: none;
  color: red;
`;

const P04_ClassAdd = ({ open, next, add, close }) => {
  const [name, setName] = useState("");
  const { createClassesApi } = useClasses();
  const professorInfo = getDataFromStorage();

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const createClass = async (e) => {
    const body = {
      name: name,
      code: "AZXCSP",
      memberId: professorInfo.id,
    };

    try {
      await createClassesApi(body);
      console.log(name);
    } catch (e) {
      alert(e);
    }
  };

  return (
    <>
      {open && (
        <Block State={open}>
          <ModalBlock>
            <Header>수업 등록</Header>
            {!next && (
              <>
                <div>등록할 수업명을 입력하여 주세요.</div>
                <CodeInput
                  label="수업명"
                  type="text"
                  name="className"
                  placeholder="(수업명)"
                  value={name}
                  onChange={handleChange}
                ></CodeInput>
                <AddButton onClick={close}>취소</AddButton>
                <AddButton onClick={add}>추가</AddButton>
              </>
            )}
            {next && (
              <>
                <div>수업명</div>
                <div>수업 코드는 다음과 같습니다.</div>
                <div>이 수업 코드는 ~에서도 확인하실 수 있습니다.</div>
                <AddButton onClick={close}>이전</AddButton>
                <AddButton onClick={createClass}>확인</AddButton>
              </>
            )}
          </ModalBlock>
        </Block>
      )}
    </>
  );
};

export default P04_ClassAdd;
