import React, { useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import styled from "styled-components";

const AssignmentBox = styled.div`
  width: 250px;
  height: 90px;
  margin-right: 50px;
  margin-bottom: 30px;
  padding: 15px;
  border: 0.5px solid #d8d8d8;
  font-size: 13px;
`;

const Box = styled.div`
  width: 1032px;
  height: 710px;
  overflow-y: auto;
  overflow-x: hidden;
`;

const ListText = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;

  color: #3d3d3d;
  padding: 20px 0px 20px 0px;
`;

const TopText = styled.div`
  width: 215px;
  height: 40px;
  display: flex;
  justify-content: space-between;
`;

const NameText = styled.div`
  font-family: Roboto;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
`;

const TeamText = styled.div`
  font-family: Roboto;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
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
        width: "1032px",
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
    <Card style={{ marginBottom: "20px", width: "1032px" }}>
      <Card.Header style={{ background: "none", border: "none" }}>
        <CustomToggle eventKey="0">
          <NameText>{assignment.name}</NameText>
        </CustomToggle>
      </Card.Header>
      <Accordion.Collapse eventKey="0">
        <Card.Body>
          {" "}
          <div style={{ display: "flex", flexWrap: "wrap", width: "1032px" }}>
            {teams.map((item) => {
              return (
                <AssignmentBox key={item.id}>
                  <TopText>
                    <TeamText>{item.name}</TeamText>
                    <div>{item.isSubmit ? "제출 완료" : "미제출"}</div>
                  </TopText>
                  <TopText>
                    <div>점수:10/10</div>
                  </TopText>
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
      <ListText>과제 별 보기</ListText>
      <Box>
        {Assignments.map((assignment) => (
          <Accordion defaultActiveKey="1" key={assignment.name} flush>
            <TeamListItem assignment={assignment} />
          </Accordion>
        ))}
      </Box>
    </div>
  );
};

export default P13;
