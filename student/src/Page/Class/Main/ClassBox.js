import React from "react";
import styled from "styled-components";
import { getDataFromStorage } from "../../../utils/storage";
import { useHistory } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ClassBox = styled.div`
  width: 280px;
  height: 250px;
  margin: 0px 25px 40px 25px;
  cursor: pointer;
`;

const ImgBox = styled.div`
  width: 100%;
  height: 125px;
  border: none;
  background-color: #ef8f88;
  border-radius: 25px 25px 0 0;
  display: flex;
  justify-content: space-between;
  padding: 80px 20px 20px 20px;
`;

const ClassName = styled.div`
  font-family: Roboto;
  font-weight: bold;
  font-size: 20px;
  color: white;
`;

const ProfessorName = styled.div`
  font-family: Roboto;
  font-size: 14px;
  color: white;
  line-height: 35px;
`;

const TextBox = styled.div`
  width: 100%;
  height: 125px;
  background-color: white;
  border: none;
  border-radius: 0 0 25px 25px;
  padding: 20px;
  line-height: 160px;
  font-family: Roboto;
  font-size: 12px;
`;

const Img = styled.img`
  width: 15px;
  height: 15px;
  margin-bottom: 2px;
  margin-left: 3px;
`;

const S04_ClassBox = ({ item }) => {
  const history = useHistory();
  const professorInfo = getDataFromStorage();

  const ClickHandler = async () => {
    history.push(`/student/class/${item.code}/main`);
  };

  return (
    <ClassBox>
      <ImgBox onClick={ClickHandler}>
        <ClassName>{item.name}</ClassName>
        <ProfessorName>{professorInfo.name}</ProfessorName>
      </ImgBox>
      <TextBox>
        수업코드 : {item.code}
        <CopyToClipboard text={item.code}>
          <Img src="https://cdn-icons-png.flaticon.com/512/88/88026.png"></Img>
        </CopyToClipboard>
      </TextBox>
    </ClassBox>
  );
};

export default S04_ClassBox;
