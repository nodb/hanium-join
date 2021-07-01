import React, { useState } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import styled from "styled-components";

const AssignmentBox = styled.div`
  width: 150px;
  height: 60px;
  margin-right: 50px;
  margin-bottom: 5px;
  padding: 10px;
  border: 0.5px solid #d8d8d8;
  font-weight: 500;
  font-size: 13px;
`;

const Assignment = [
  {
    name: "과제 1",
    isSubmit: true,
  },
  {
    name: "과제 2",
    isSubmit: false,
  },
  {
    name: "과제 3",
    isSubmit: true,
  },
  {
    name: "과제 4",
    isSubmit: false,
  },
  {
    name: "과제 5",
    isSubmit: true,
  },
];

const teams = [
  {
    id: 1,
    name: "TEAM 1",
  },
  {
    id: 2,
    name: "TEAM 2",
  },
];
const TeamListItem = ({ team }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <p
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        style={{ marginBottom: "2px" }}
      >
        {" "}
        {isOpen ? "▼" : "▶"} TEAM {team.id}
      </p>
      <Collapse isOpen={isOpen}>
        <Card
          style={{
            display: "flex",
            width: "670px",
            marginBottom: "10px",
          }}
        >
          <CardBody style={{ display: "inline-flex", flexWrap: "wrap" }}>
            {Assignment.map((item) => {
              return (
                <AssignmentBox>
                  {item.name}
                  <br />
                  {item.isSubmit ? "제출 완료" : "미제출"}
                </AssignmentBox>
              );
            })}
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
};

const P12 = () => {
  return (
    <div>
      <h4 class="mt-2">팀별 보기</h4>
      {teams.map((team) => (
        <TeamListItem team={team} />
      ))}
    </div>
  );
};

export default P12;
