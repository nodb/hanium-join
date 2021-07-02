import React from "react";
import styled from "styled-components";

import StudentBox from "./Student";
import AssignmentBox from "./Assignment";
import {Link} from "react-router-dom"; 

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

const Assignment = [
  {
    id: 1,
    name: "과제명1",
    deadline: "2021-06-25",
    url: "/class/main/assignment",
  },
  {
    id: 2,
    name: "과제명2",
    deadline: "2021-06-19",
  },
  {
    id: 3,
    name: "과제명3",
    deadline: "2021-06-16",
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
  return (
    <>
      <Text>팀원</Text>
      <div style={{ display: "inline-flex" }}>
        {Student.map((item) => {
          return <StudentBox student={item}></StudentBox>;
        })}
      </div>
      <Text>과제</Text>
      {Assignment.map((item) => {
        return (<Link to={item.url} style={{textDecoration:"none", color:"black"}}><AssignmentBox assignment={item}></AssignmentBox></Link>);
      })}
    </>
  );
}

export default S05_05_06;
