import React from "react";
import styled from "styled-components";

import StudentList from "./P05_StudentList";
import Enrolment from "./P05_Enrolment";

const List = [
  {
    id: 1,
    name: "조재영",
    num: "18100000",
    grade: 2,
  },
  {
    id: 2,
    name: "오예진",
    num: "19100000",
    grade: 3,
  },
  {
    id: 3,
    name: "엄유상",
    num: "19101000",
    grade: 3,
  },
  {
    id: 4,
    name: "마경미",
    num: "19101100",
    grade: 3,
  },
  {
    id: 5,
    name: "김성규",
    num: "20100000",
    grade: 1,
  },
  {
    id: 6,
    name: "김명수",
    num: "20101000",
    grade: 1,
  },
  {
    id: 7,
    name: "조재영",
    num: "18100000",
    grade: 2,
  },
  {
    id: 8,
    name: "오예진",
    num: "19100000",
    grade: 3,
  },
  {
    id: 9,
    name: "엄유상",
    num: "19101000",
    grade: 3,
  },
  {
    id: 10,
    name: "마경미",
    num: "19101100",
    grade: 3,
  },
  {
    id: 11,
    name: "김성규",
    num: "20100000",
    grade: 1,
  },
  {
    id: 12,
    name: "김명수",
    num: "20101000",
    grade: 1,
  },
];

const Box = styled.div`
  background-color: #d8d8d8;
  width: 1100px;
  height: 250px;
  overflow: scroll;
  display: flex;
  flex-wrap: wrap;
  padding: 30px 50px 30px;
`;

const Text = styled.div`
  font-family: "Nanum Gothic", sans-serif;
  font-size: 20px;
  font-weight: 900;
  width: 120px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

function P05_04() {
  return (
    <>
      <Text>수강생 목록</Text>
      <Box>
        {List.map((item) => {
          return <StudentList student={item}></StudentList>;
        })}
      </Box>
      <Text>수강 신청</Text>
      <Box>
        {List.map((item) => {
          return <Enrolment student={item}></Enrolment>;
        })}
      </Box>
    </>
  );
}

export default P05_04;
