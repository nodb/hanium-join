import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import StudentBox from "./Student";
import AssignmentBox from "./Assignment";
import noTeam from "../../../images/support.png";

import { useAssignments, useTeams } from "../../../components/Use";
import { getDataFromStorage } from "../../../utils/storage";
import { useLoading, CTLoading } from "../../../components";

const Text = styled.div`
  font-family: "Nanum Gothic", sans-serif;
  font-size: 20px;
  font-weight: 900;
  width: 40px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const TeamBox = styled.div`
  width: 1100px;
  height: 200px;
  display: flex;
  overflow-y: scroll;
  border-bottom: 1px solid #c4c4c4;
`;

const NoTeamBox = styled.div`
  width: 1100px;
  height: 200px;
  border-bottom: 1px solid #c4c4c4;
`;

const SmallBox = styled.div`
  width: 300px;
  margin: 0 auto;
`;

const Img = styled.img`
  margin-left: 50px;
  width: 100px;
  padding-bottom: 20px;
`;

const S05_05_06 = () => {
  const { assignmentByTeamList, getAssignmentsByTeam } = useAssignments();
  const { teamList, teamMemberList } = useTeams();
  const { code } = useParams();
  const { loading, setLoading } = useLoading(true);

  const studentInfo = getDataFromStorage();

  useEffect(() => {
    const fetch = async () => {
      try {
        await teamMemberList(`classCode=${code}&memberId=${studentInfo.id}`);
      } catch (e) {
        alert(e);
      }
    };
    fetch();
  }, []);

  useEffect(() => {
    const fetch = async () => {
      try {
        await getAssignmentsByTeam(teamList.teamId);
      } catch (e) {
        alert(e);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [teamList]);

  return loading ? (
    <CTLoading />
  ) : (
    <div>
      <div>
        <Text>팀원</Text>
        {teamList.count === 0 && (
          <NoTeamBox>
            <SmallBox>
              <Img src={noTeam} alt="noteam"></Img>
              <div>아직 팀이 맺어지지 않았어요!</div>
            </SmallBox>
          </NoTeamBox>
        )}
        {teamList.results.map((item) => {
          return (
            <TeamBox>
              <StudentBox key={item.id} student={item} />
            </TeamBox>
          );
        })}
      </div>
      <div>
        <Text>과제</Text>
        {assignmentByTeamList.results.map((item) => (
          <AssignmentBox key={item.id} assignment={item} />
        ))}
      </div>
    </div>
  );
};

export default S05_05_06;
