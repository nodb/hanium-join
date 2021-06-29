import React from "react";
import styled from "styled-components";

const StudentBox = styled.div`
  border: 0.1px solid #121212;
  padding: 5px;
  width: 450px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  background-color: white;
  margin-bottom: 20px;
  margin-left: 30px;
`;

const Delete = styled.button`
  width: 50px;
  height: 30px;
`;

function P05_StudentList({ student }) {
  return (
    <StudentBox>
      <div>
        {student.name}({student.num}/{student.grade}학년)
      </div>
      <Delete>삭제</Delete>
    </StudentBox>
  );
}

export default P05_StudentList;
