import React from "react";
import styled from "styled-components";

const StudentBox = styled.div`
  border: 0.1px solid #121212;
  padding: 5px;
  width: 450px;
  height: 40px;
  display: flex;
  background-color: white;
  margin-bottom: 20px;
  margin-left: 30px;
`;

const Delete = styled.button`
  width: 50px;
  height: 30px;
  margin-left: 10px;
`;

function P05_StudentList({ student }) {
  return (
    <StudentBox>
      <div>
        {student.name}({student.num}/{student.grade}학년)
      </div>
      <div style={{ width: "120px", margin: "0 0 0 auto" }}>
        <Delete>수락</Delete>
        <Delete>삭제</Delete>
      </div>
    </StudentBox>
  );
}

export default P05_StudentList;
