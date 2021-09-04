import React from "react";
import styled from "styled-components";

const StudentBox = styled.div`
  width: 208px;
  height: 61px;
  padding: 15px;
  border: 0.5px solid #EF8F88;
  font-family: "Nanum Gothic Coding", monospace;
  font-weight: 500;
  font-size: 13px;
  background-color: white;
`;

function S05_Student({ student }) {
  return (
    <StudentBox>
      {student.name}({student.grade}학년)<br></br>
      {student.department}
    </StudentBox>
  );
}

export default S05_Student;
