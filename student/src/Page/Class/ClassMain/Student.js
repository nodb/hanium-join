import React from "react";
import styled from "styled-components";

import noTeam from "../../../images/support.png";

const StudentBox = styled.div`
  width: 230px;
  height: 80px;
  margin-right: 50px;
  padding: 15px;
  border: 0.5px solid #d8d8d8;
  font-family: "Nanum Gothic Coding", monospace;
  font-weight: 500;
  font-size: 15px;
`;

const Text = styled.div`
  font-family: "Nanum Gothic", sans-serif;
  font-size: 20px;
  font-weight: 900;
  width: 40px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const TeamBox = styled.div`
  width: 1100px;
  height: 200px;
  display: flex;
  overflow-y: scroll;
  border-bottom: 1px solid #c4c4c4;
`;

const NoTeamBox = styled.div`
  width: 1100px;
  height: 200px;
  border-bottom: 1px solid #c4c4c4;
`;

const SmallBox = styled.div`
  width: 300px;
  margin: 0 auto;
`;

const Img = styled.img`
  margin-left: 50px;
  width: 100px;
  padding-bottom: 20px;
`;

const StudentDetail = ({ student }) => {
  return (
    <StudentBox>
      {student.name}({student.grade}학년)<br></br>
      {student.department}
    </StudentBox>
  );
};

const S05_Student = ({ List }) => {
  return (
    <div>
      <Text>팀원</Text>
      {List.count === 0 && (
        <NoTeamBox>
          <SmallBox>
            <Img src={noTeam} alt="noteam"></Img>
            <div>아직 팀이 맺어지지 않았어요!</div>
          </SmallBox>
        </NoTeamBox>
      )}
      <TeamBox>
        {List.results.map((item) => {
          return <StudentDetail key={item.id} student={item} />;
        })}
      </TeamBox>
    </div>
  );
};

export default S05_Student;
