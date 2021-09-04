import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import StudentList from "./P07_StudentList";
import StudentTeam from "./P07_StudentTeam";

const Text = styled.div`

  font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 23px;

color: #3D3D3D;
margin-top: 10px;
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

function P07_05() {

  return (
    <Box>
      <Head>
        <Text>팀편성</Text>
        <LinkButton>
        <Link
          to="/professor/class/team"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div>돌아가기</div>
        </Link>
        </LinkButton>
      </Head>

      <Cont>
        <Student>
          <ListText>학생목록</ListText>
          <StudentList />
        </Student>
        <Team>
          <div >
            <ListText>팀목록</ListText>
            <Select name="team" id="team">
              <option value="">팀 선택</option>
              <option value="1">TEAM 01</option>
              <option value="2">TEAM 02</option>
              <option value="3">TEAM 03</option>
            </Select>
          </div>
          <StudentTeam />
        </Team>
      </Cont>
    </Box>
  );
}

export default P07_05;
