import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { DateChange } from "../../../utils/dateChange";

const AssignmentBox = styled.div`
  display: flex;
  width: 1100px;
  height: 80px;
  margin-bottom: 30px;
  background-color: #e5e5e5;
  padding: 25px 30px 25px 30px;
  justify-content: space-between;
  cursor: pointer;
`;

const AssignmentName = styled.div`
  font-family: "Nanum Gothic", sans-serif;
  font-size: 18px;
  font-weight: 400;
`;

const RightBox = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
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
      <RightBox>
        <div>{DateChange(assignment.endDate)}</div>
        <div>제출</div>
      </RightBox>
    </AssignmentBox>
  );
};

export default S05_Assignment;
