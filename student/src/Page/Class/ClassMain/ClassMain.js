import React, { useEffect } from "react";
import styled from "styled-components";

import StudentBox from "./Student";
import AssignmentBox from "./Assignment";
import { Link, useHistory } from "react-router-dom";

import { useAssignments } from "../../../components/Use";

const Student = [
  {
    id: 1,
    name: "조재영",
    grade: 2,
    department: "컴퓨터공학과",
  },
  {
    id: 2,
    name: "마경미",
    grade: 3,
    department: "전자IT미디어공학과",
  },
  {
    id: 3,
    name: "오예진",
    grade: 3,
    department: "전기정보공학과",
  },
  {
    id: 4,
    name: "엄유상",
    grade: 4,
    department: "인공지능학과",
  },
];

const Text = styled.div`
  font-family: "Nanum Gothic", sans-serif;
  font-size: 20px;
  font-weight: 900;
  width: 40px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

function S05_05_06() {
  const { assignmentsList, listAllByClassCode } = useAssignments();

  useEffect(() => {
    const fetch = async () => {
      await listAllByClassCode();
    };
    fetch();
  }, []);

  return (
    <>
      <Text>팀원</Text>
      <div style={{ display: "inline-flex" }}>
        {Student.map((item) => {
          return <StudentBox student={item}></StudentBox>;
        })}
      </div>
      <Text>과제</Text>
      {assignmentsList.results.map((item) => (
        <AssignmentBox key={item.id} assignment={item} />
      ))}
    </>
  );
}

export default S05_05_06;
