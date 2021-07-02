import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import StudentList from "./P07_StudentList";
import StudentTeam from "./P07_StudentTeam";
import Assign from "./P07_Assign";

const Text = styled.div`
  font-family: "Nanum Gothic", sans-serif;
  font-size: 20px;
  font-weight: 900;
  width: 80px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const Select = styled.select`
  margin-top: 20px;
  width: 100px;
  height: 30px;
`;

const Button = styled.button`
  width: 100px;
  height: 30px;
  margin-right: 50px;
  margin-top: 25px;
  background-color: white;
`;

function P07_05() {
  const [Modal, setModalOpen] = useState(false);

  const ModalOpen = () => {
    setModalOpen(true);
  };

  const ModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <Text style={{ width: "700px", fontSize: "23px" }}>팀편성</Text>
        <Button onClick={ModalOpen}>자동 편성</Button>
        <Link
          to="/class/team"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div style={{ marginTop: "25px" }}>팀 화면으로 돌아가기</div>
        </Link>
      </div>
      <div style={{ display: "flex" }}>
        <div>
          <Text>학생목록</Text>
          <StudentList />
        </div>
        <div style={{ width: "200px" }}></div>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Text>팀목록</Text>
            <Select name="team" id="team">
              <option value="">팀 선택</option>
              <option value="1">TEAM 01</option>
              <option value="2">TEAM 02</option>
              <option value="3">TEAM 03</option>
            </Select>
          </div>
          <StudentTeam />
        </div>
      </div>
      <Assign open={Modal} close={ModalClose}></Assign>
    </>
  );
}

export default P07_05;
