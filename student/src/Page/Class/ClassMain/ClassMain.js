import React, { useEffect } from "react";
import styled from "styled-components";

import StudentBox from "./Student";
import AssignmentBox from "./Assignment";

import { useAssignments, useTeams } from "../../../components/Use";
import { getDataFromStorage } from "../../../utils/storage";

const Box = styled.div`
  width: 80%;
`;

const Text = styled.div`
  font-family: "Nanum Gothic", sans-serif;
  font-size: 20px;
  font-weight: 900;
  width: 40px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

function S05_05_06() {
  const { assignmentsList, listAllByClassCode } = useAssignments();
  const { teamList, teamMemberList } = useTeams();

  const studentInfo = getDataFromStorage();

  useEffect(() => {
    const fetch = async () => {
      await listAllByClassCode();
    };
    fetch();
  }, []);

  useEffect(() => {
    const fetch = async () => {
      await teamMemberList(`classCode=1&memberId=${studentInfo.id}`);
    };
    fetch();
  }, []);

  return (
    <Box>
      <Text>팀원</Text>
      <div style={{ display: "inline-flex" }}>
        {teamList.results.map((item) => {
          return <StudentBox key={item.id} student={item} />;
        })}
      </div>
      <Text>과제</Text>
      {assignmentsList.results.map((item) => (
        <AssignmentBox key={item.id} assignment={item} />
      ))}
    </Box>
  );
}

export default S05_05_06;
