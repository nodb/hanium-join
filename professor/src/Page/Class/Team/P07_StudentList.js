import React, { useState } from "react";
import styled from "styled-components";
import { Form, FormGroup, Label, Input } from "reactstrap";

const Student = [
  {
    id: 1,
    name: "조재영",
    grade: 2,
    team: 0,
    active: false,
  },
  {
    id: 2,
    name: "마경미",
    grade: 3,
    team: 0,
    active: false,
  },
  {
    id: 3,
    name: "오예진",
    grade: 3,
    team: 0,
    active: false,
  },
  {
    id: 4,
    name: "엄유상",
    grade: 4,
    team: 0,
    active: false,
  },
];

const StudentBox = styled.div`
  width: 180px;
  font-size: 18px;
  margin-bottom: 10px;
`;

const Box = styled.div`
  width: 400px;
  height: 626px;
  overflow: scroll;
  flex-wrap: wrap;
  padding: 30px 50px 30px;
  position: relative;
  background: #FFFFFF;
border: 2px solid #6F91B5;
box-sizing: border-box;
margin-top: 20px;
`;

const RelatvieBox = styled.div`
  width: 200px;
  position: relative;
  left: 465px;
  bottom: 350px;
`;

function P07_StudnentList() {
  const [team, setTeam] = useState(Student);

  const onToggle = (id) => {
    console.log(id);
    setTeam(
      team.map((data) =>
        data.id === id ? { ...data, active: !data.active } : data
      )
    );
  };

  return (
    <>
      <Box>
        <Form>
          {team.map((data) => {
            return (
              <StudentBox>
                <FormGroup check inline key={data.id}>
                  <Label check>
                    <Input
                      type="checkbox"
                      id={data.id}
                      onClick={() => onToggle(data.id)}
                    />
                    {data.name}({data.grade}학년)
                  </Label>
                </FormGroup>
              </StudentBox>
            );
          })}
        </Form>
      </Box>
    </>
  );
}

export default P07_StudnentList;
