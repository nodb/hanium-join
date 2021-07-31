import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const IntroText = styled.div`
  padding-left: 30px;
  font-size: 18px;
  color: gray;
`;

const ClassText = styled.div`
  font-size: 20px;
  padding-left: 30px;
`;

const classes = [
  {
    id: 1,
    name: "시스템 프로그래밍",
    code: "000001",
  },
  {
    id: 2,
    name: "컴퓨터 네트워크",
    code: "000002",
  },
  {
    id: 3,
    name: "소프트웨어 공학",
    code: "000003",
  },
];

function MyClass() {
  return (
    <>
      <IntroText>강의를 클릭하면 해당 페이지로 이동합니다.</IntroText> <br />
      {classes &&
        classes.map((item) => {
          return (
            <Link
<<<<<<< HEAD
              to="/class/main"
=======
              to="/professor/class/enrol"
>>>>>>> 3eb3fac170c5980ada387928f12e91ed9e75d89d
              style={{ textDecoration: "none", color: "black" }}
            >
              <ClassText>
                {item.name}, 수업코드 : {item.code}
              </ClassText>
              <br />
            </Link>
          );
        })}
    </>
  );
}

export default MyClass;
