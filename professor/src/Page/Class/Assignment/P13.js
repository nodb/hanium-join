import React, { useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
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

const CustomToggle = ({ children, eventKey }) => {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <button
      type="button"
      style={{
        background: "none",
        border: "none",
        width: "100%",
        textAlign: "left",
      }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
};

const TeamListItem = ({ assignment }) => {
  return (
    <Card style={{ marginBottom: "20px", width: "1100px" }}>
      <Card.Header style={{ background: "none", border: "none" }}>
        <CustomToggle eventKey="0">{assignment.name}</CustomToggle>
      </Card.Header>
      <Accordion.Collapse eventKey="0">
        <Card.Body>
          {" "}
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {teams.map((item) => {
              return (
                <AssignmentBox>
                  TEAM {item.id}
                  <br />
                  {item.isSubmit ? "제출 완료" : "미제출"}
                </AssignmentBox>
              );
            })}
          </div>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

const P13 = () => {
  return (
    <div>
      <h4 class="mt-2">과제 별 보기</h4>
      <div style={{ overflowY: "scroll", width: "1150px" }}>
        {Assignments.map((assignment) => (
          <Accordion defaultActiveKey="1" key={assignment.id} flush>
            <TeamListItem assignment={assignment} />
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default P13;
