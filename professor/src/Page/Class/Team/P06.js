import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import StudentBox from "./P06_Student";
import Assign from "./P07_Assign";
import { useHistory } from "react-router-dom";

import { useEnrolment, useTeams } from "../../../components/Use";
import {getDataFromStorage} from "../../../utils/storage";

const WrapBox = styled.div`
  height: 785px;
  overflow: scroll;
  padding: 20px;
  width: 80%;
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

const team = getDataFromStorage();

function P05_04() {

  const history = useHistory();

  const [Modal, setModalOpen] = useState(false);

  const ModalOpen = () => {
    setModalOpen(true);
  };

  const ModalClose = () => {
    setModalOpen(false);
  };

  const {studentList, studentListAll} = useEnrolment();
  const {teamList, listAllTeams, deleteTeamApi } = useTeams();


  const deleteHandler = async(id) => {
    try{
      await deleteTeamApi(id);
      alert("수정되었습니다.");
      history.push("/professor/class/team");
      await listAllTeams("AZSVBFV");
    } catch(e) {
      alert(e);
    } 
  }

  useEffect(()=> {
    const fetch = async () =>{
      try{
        const classId = getDataFromStorage();
        await studentListAll("AZSVBFV");
      }
      catch(e){
        alert(e);
      }
    }
    fetch();
  },[])

  useEffect(()=> {
    const fetch = async () =>{
      try{
        const classId = getDataFromStorage();
        await listAllTeams("AZSVBFV");
      }
      catch(e){
        alert(e);
      }
    }
    fetch();
  },[])

  return (
    <>
    <WrapBox>
      {studentList.total === 0 &&
        (
        <>
        <NoBox>
          <NoImg>
          <img src={require('../../../images/no_student.png').default} alt="학생없음이미지" />
          </NoImg>
          <NoText>
          아직 수업에 학생이 없습니다. <br/>
          <Link
            to="/professor/class/enrol"
            style={{ textDecoration: "none", color: "blue" }}
          >
          수강생 관리
          </Link> 에서 학생을 추가해보세요.
          </NoText>
        </NoBox>
        </>
        )
      }
      {studentList.total !== 0 &&
      (
        <>
      <TitleBox>
          <LinkButton onClick={ModalOpen}>자동 편성</LinkButton>
      </TitleBox>
      {teamList.results.map((item) => {
        return (
          <>
            <Text>Team{item.id}</Text>
            <DeleteButton onClick={() => {deleteHandler(item.id)}}>삭제</DeleteButton>
            <Box>
              {/* {studentList.results.map((data) => {
                return <StudentBox student={data}></StudentBox>;
              })} */}
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
        </>
      )
      }
      
    </WrapBox>
    </>
  );
}

export default P05_04;
