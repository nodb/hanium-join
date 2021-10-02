import React from "react";
import styled from "styled-components";
import { Accordion, Card } from "react-bootstrap";
import { useAccordionButton } from "react-bootstrap/AccordionButton";

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

const TeamListItem = ({ team }) => {
  return (
    <>
      <Card style={{ marginBottom: "20px" }}>
        <Card.Header
          style={{ width: "1100px", background: "none", border: "none" }}
        >
          <CustomToggle eventKey="0">TEAM {team.id}</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            {" "}
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {Assignment.map((item) => {
                return (
                  <AssignmentBox key={item.name}>
                    {item.name}
                    <br />
                    {item.isSubmit ? "제출 완료" : "미제출"}
                  </AssignmentBox>
                );
              })}
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </>
  );
};

const P12 = () => {
  return (
    <div>
      <h4 className="mt-2">팀별 보기</h4>
      {teams.map((team) => (
        <Accordion defaultActiveKey="1" key={team.id} flush>
          <TeamListItem team={team} />
        </Accordion>
      ))}
    </div>
  );
};

export default P12;
