import React from "react";
import styled from "styled-components";

import check from "../../../images/check.png";
import refuse from "../../../images/x.png";

import { getDataFromStorage } from "../../../utils/storage";
import { useEnrolment } from "../../../components/Use";

const StudentBox = styled.div`
  border: 2px solid #c4c4c4;
  padding: 15px;
  width: 250px;
  height: 90px;
  justify-content: space-between;
  background-color: white;
  margin-bottom: 20px;
  margin-left: 30px;
  display: flex;
`;

const Delete = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
  margin-bottom: 10px;
`;

const ButtonBox = styled.div`
  width: 30px;
  height: 100%;
`;

const Name = styled.div`
  font-family: Roboto;
  font-size: 16px;
  margin-bottom: 11px;
`;

const P05_StudentList = ({ code, student }) => {
  const { studentListAll, removeStudentApi } = useEnrolment();

  const RemoveHandler = () => {
    const fetch = async () => {
      try {
        await removeStudentApi(`memberId=${student.id}&classCode=${code}`);
        await studentListAll(code);
      } catch (e) {
        alert(e);
      }
    };

    fetch();
  };

  return (
    <StudentBox>
      <div>
        <Name>{student.name}</Name>
        <div>
          ({student.studentID}/{student.grade}학년)
        </div>
      </div>
      <ButtonBox>
        <Delete onClick={RemoveHandler} src={refuse} />
      </ButtonBox>
    </StudentBox>
  );
};

export default P05_StudentList;
