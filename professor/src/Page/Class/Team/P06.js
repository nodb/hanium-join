import React, {useState} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import StudentBox from "./P06_Student";
import Assign from "./P07_Assign";

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
      {
        id: 5,
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
  height: 785px;
  overflow: scroll;
  padding: 20px;
`;

const Box = styled.div`
  border: 1px solid #000000;
  width: 1100px;
  height: 250px;
  overflow: scroll;
  margin-top: 10px;
  margin-bottom: 30px;
  padding: 30px 30px 30px 30px;
  flex-wrap: nowrap;
  display: flex;
  justify-content: space-between;
`;

const Buttons = styled.div`

`

const DeleteButton = styled.div`
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 15px;
line-height: 18px;
text-align: right;
margin-top: -30px;
color: #7C7979;
`

const CreateBox = styled.div`
background: #FFFFFF;
border: 1px dashed #000000;
box-sizing: border-box;

width: 1100px;
height: 250px;
margin-top: 92px;
text-align: center;
img{
  margin-top: 85px;
  width: 70px;
  height: 70px;
}
`

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
  width: 100px;
  height: 32px;
  border: 2px solid #426589;
  box-sizing: border-box;
  border-radius: 50px;
  color: #426589;
  font-size: 18px;
  text-align: center;
  margin-left: 980px;
`;

const NoBox = styled.div`
  margin-top: 250px;
  width: 100%;
  height: 100%;
`;

const NoImg = styled.div`
text-align: center;
img{
  float: middle;
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

  const [Modal, setModalOpen] = useState(false);

  const ModalOpen = () => {
    setModalOpen(true);
  };

  const ModalClose = () => {
    setModalOpen(false);
  };


  return (
    // <>
    // <NoBox>
    //   <NoImg>
    //   <img src={require('../../../images/no_student.png').default} alt="학생없음이미지" />
    //   </NoImg>
    //   <NoText>
    //   아직 수업에 학생이 없습니다. <br/>
    //   <Link
    //     to="/professor/class/enrol"
    //     style={{ textDecoration: "none", color: "blue" }}
    //   >
    //   수강생 관리
    //   </Link>에서 학생을 추가해보세요.
    //   </NoText>
    // </NoBox>
    // </>
    <WrapBox>
      <TitleBox>
          <LinkButton onClick={ModalOpen}>자동 편성</LinkButton>
      </TitleBox>
      {List.map((item) => {
        return (
          <>
            <Text>Team{item._id}</Text>
            <DeleteButton>삭제</DeleteButton>
            <Box>
              {item.team.map((data) => {
                return <StudentBox student={data}></StudentBox>;
              })}
            </Box>
          </>
        );
      })}
      <CreateBox>
        <Link to="/professor/class/assign">
          <img src={require('../../../images/plus_team.png').default} alt="팀 추가" />
        </Link>
      </CreateBox>
      <Assign open={Modal} close={ModalClose}></Assign>
    </WrapBox>
  );
}

export default P05_04;
