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

const Assignments = [
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
    isSubmit: true,
  },
  {
    id: 2,
    name: "TEAM 2",
    isSubmit: false,
  },
];
const TeamListItem = ({ assignment }) => {
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
        {isOpen ? "▼" : "▶"} {assignment.name}
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
            {teams.map((item) => {
              return (
                <AssignmentBox>
                  TEAM {item.id}
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
      <h4 class="mt-2">과제 별 보기</h4>
      {Assignments.map((assignment) => (
        <TeamListItem assignment={assignment} />
      ))}
    </div>
  );
};

export default P12;
