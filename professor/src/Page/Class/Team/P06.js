import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import StudentBox from "./P06_Student";

const List = [
  {
    _id: 1,
    team: [
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
    ],
  },
  {
    _id: 2,
    team: [
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
    ],
  },
  {
    _id: 3,
    team: [
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
    ],
  },
];

const WrapBox = styled.div`
  height: 680px;
  overflow: scroll;
  padding: 20px;
`;

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

const TitleBox = styled.div`
  width: 1100px;
  height: 80px;
  display: flex;
  justify-content: space-between;
`;

const LinkButton = styled.div`
  color: grey;
  line-height: 80px;
`;

const NoImg = styled.div`
img{
  width: 250px;
  height: 250px;
}
`;

const NoText = styled.div`
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 21px;
text-align: center;

color: #000000;
`

function P05_04() {
  return (

    <>
    <NoImg>
    <img src={require('../../../images/no_student.png').default} alt="학생없음이미지" />
    </NoImg>
    <NoText>
    아직 수업에 학생이 없습니다.
    수강생 관리에서 학생을 추가해보세요.
    </NoText>
    </>

    // <WrapBox>
    //   <TitleBox>
    //     <Text style={{ width: "150px", fontSize: "23px" }}>구성 팀 확인</Text>
    //     <Link
    //       to="/professor/class/assign"
    //       style={{ textDecoration: "none", color: "inherit" }}
    //     >
    //       <LinkButton>팀 편성하기</LinkButton>
    //     </Link>
    //   </TitleBox>
    //   {List.map((item) => {
    //     return (
    //       <>
    //         <Text>Team{item._id}</Text>
    //         <Box>
    //           {item.team.map((data) => {
    //             return <StudentBox student={data}></StudentBox>;
    //           })}
    //         </Box>
    //       </>
    //     );
    //   })}
    // </WrapBox>
  );
}

export default P05_04;
