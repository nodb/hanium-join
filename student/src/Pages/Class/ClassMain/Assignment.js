import React from "react";
import styled from "styled-components";

const AssignmentBox = styled.div`
  display: flex;
  border: 0.5px solid #d8d8d8;
  width: 1070px;
  height: 80px;
  margin-bottom: 30px;
  background-color: #d8d8d8;
  padding: 25px 15px 25px 15px;
  justify-content: space-between;
  cursor: pointer;
`;

const AssignmentName = styled.div`
  font-family: "Nanum Gothic", sans-serif;
  font-size: 18px;
  font-weight: 400;
`;

function S05_Assignment({ assignment }) {
  return (
    <AssignmentBox>
      <AssignmentName>{assignment.name}</AssignmentName>
      <div>{assignment.deadline}</div>
    </AssignmentBox>
  );
}

export default S05_Assignment;
