import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useTeams } from "../../../components/Use";

import StudentList from "./P07_StudentList";
import TeamList from "./P07_TeamList";

const Text = styled.div`

  font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 23px;

color: #3D3D3D;
margin-top: 30px;
`;
const Select = styled.select`
margin-top: -16px;
  width: 100px;
  height: 30px;
  float: right;
  margin-bottom: 6px;
`;
const Button = styled.button`
  width: 100px;
  height: 30px;
  margin-right: 50px;
  margin-top: 25px;
  background-color: white;
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
const Box = styled.div`
`
const Head = styled.div`
`
const Cont = styled.div`
display: flex;
margin-top: -10px;
`
const Student = styled.div`
`
const Team = styled.div`
`
const ListText = styled.div`
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 23px;

color: #3D3D3D;
margin-top: 42px;
`
const RelatvieBox = styled.span`
  margin-top: 303px;
  width: 200px;
  right: 135px;
`;

function P07_05() {
  const { code } = useParams();
  const { teamList, listAllTeams } = useTeams();

  const fetch = async() => {
    try{
      await listAllTeams(code);
    } catch (e) {
      alert(e);
    } 
  }

  const [students, setStudents] = useState(teamList.results[0]);

  const teamClick = (e) => {
    setStudents(teamList.results[Number(e.target.value)-1]);
  }

  useEffect(()=> {
    fetch();
  },[])
  

  return (
    <Box>
      <Head>
        <Text>팀편성</Text>
        <LinkButton>
        <Link
          to={`/professor/class/${code}/team`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div>돌아가기</div>
        </Link>
        </LinkButton>
      </Head>

      <Cont>
        <Student>
          <ListText>학생목록</ListText>
          <StudentList students={students}/>
        </Student>
        <RelatvieBox>
      </RelatvieBox>
        <Team>
          <div >
            <ListText>팀목록</ListText>
            <Select onChange={teamClick}  name="team" id="team" >
              {teamList.results.map((data) => {
                return ( 
                <option 
                value={data.name}
                >
                  TEAM {data.name}
                  </option>  
                )})}
            </Select> 
          </div>
        <TeamList students={students}/>

        </Team>
      </Cont>
    </Box>
  );
}

export default P07_05;