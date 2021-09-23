import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { DateChange } from "../../../utils/dateChange";

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

const S05_Assignment = ({ assignment }) => {
  const { code } = useParams();

  const history = useHistory();
  const clickHandler = (assignmentId) => {
    history.push(`/student/class/${code}/main/assignment/${assignmentId}`);
  };

  return (
    <AssignmentBox
      onClick={() => {
        clickHandler(assignment.id);
      }}
    >
      <AssignmentName>{assignment.name}</AssignmentName>
      <div>{DateChange(assignment.endDate)}</div>
    </AssignmentBox>
  );
};

export default S05_Assignment;
