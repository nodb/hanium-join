import React, { useState, useEffect } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink, Button } from "reactstrap";
import { useParams } from "react-router-dom";
import { useAssignments, useTeams } from "../../../components/Use";
import styled from "styled-components";

import classnames from "classnames";
import Submit from "./Submit";
import Discuss from "./Discuss";
import Modal from "./Modal";
import { getDataFromStorage } from "../../../utils/storage";

const AssignmentTitle = styled.div`
  width: 152px;
  height: 23px;

  font-family: Roboto;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;

  color: #3d3d3d;
`;

const TitleBox = styled.div`
  width: 1100px;
  display: flex;
  justify-content: space-between;
`;

const Box = styled.div`
  width: 80%;
`;

const Title = styled.div`
  width: 70px;
  text-align: center;
  font-family: Roboto;
  font-weight: bold;
  font-size: 15px;
  line-height: 23px;
  color: #3d3d3d;
`;

const SubmitAndDiscuss = () => {
  const [activeTab, setActiveTab] = useState(true);

  const { id, code } = useParams();
  const { assignmentOne, getAssignment, assignmentTeamOne, getAssignmentTeam } =
    useAssignments();
  const { teamList, teamMemberList } = useTeams();
  const studentInfo = getDataFromStorage();
  useEffect(() => {
    const fetch = async () => {
      try {
        await teamMemberList(`classCode=${code}&memberId=${studentInfo.id}`);
        await getAssignmentTeam(id, teamList.results[0].teamId);
        await getAssignment(id);
      } catch (e) {
        alert(e);
      }
    };
    fetch();
  }, []);

  useEffect(()=> {
    const fetch = async () => {
      try {
      } catch (e) {
        alert(e);
      }
    };
    fetch();
  },[])

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <Box>
      <div className="d-flex pt-3 pb-2 mb-3">
        <TitleBox>
          <AssignmentTitle>{assignmentOne.name}</AssignmentTitle>
          <Modal assignmentTeamId={assignmentTeamOne.id}>팀 커뮤니티 창</Modal>
        </TitleBox>
      </div>
      <Nav tabs style={{ width: "1100px" }}>
        <NavItem>
          <NavLink
            style={
              activeTab
                ? { border: "none", borderBottom: "5px solid #EF8F88" }
                : { border: "none" }
            }
            className={classnames({ active: activeTab === true })}
            onClick={() => {
              toggle(true);
            }}
          >
            <Title>과제제출</Title>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            style={
              activeTab
                ? { border: "none" }
                : { border: "none", borderBottom: "5px solid #EF8F88" }
            }
            className={classnames({ active: activeTab === false })}
            onClick={() => {
              toggle(false);
            }}
          >
            <Title>토론하기</Title>
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId={true}>
          <Submit />
        </TabPane>
        <TabPane tabId={false}>
          <Discuss />
        </TabPane>
      </TabContent>
    </Box>
  );
};

export default SubmitAndDiscuss;
