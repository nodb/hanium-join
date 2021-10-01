import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";
import styled from "styled-components";
import useAddAssignment from "./useAddAssignment";


const Box = styled.div`
  width: 80%;
  height: 785px;
  overflow-y: auto;
  overflow-x: hidden;
  
  button {
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    text-align: center;
    background-color: #ffffff;
    border-color: #426589;
    color: #426589;
    width: 60px;
    height: 30px;
    margin-top: 20px;
  }
`;

const Text = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #ef8f88;
  margin-top: 10px;
  margin-left: 160px;
`;

const AssignmentView = () => {
    
  const {imageChange, handleChange, checkboxChange, teamList, createHandler, data} = useAddAssignment();

        return (
            <Box>
              <Form>
                <div style={{display : "flex" , justifyContent: "flex-end"}}>
                  <button size="sm" style={{ marginTop: "20px" }} onClick={createHandler}>
                    완료
                  </button>
                </div>
                <FormGroup
                  row
                  style={{
                    marginLeft: 3,
                    padding: "15px 0px",
                    borderBottom: "1px solid #C4C4C4",
                  }}
                >
                  <Label
                    for="name"
                    sm={1}
                    style={{ fontWeight: "bold", paddingLeft: 0 }}
                  >
                    과제명
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="name"
                      name="name"
                      id="name"
                      value={data.name}
                      onChange={handleChange}
                    />
                  </Col>
                </FormGroup>
                <FormGroup
                  row
                  style={{
                    marginLeft: 3,
                    padding: "15px 0px",
                    borderBottom: "1px solid #C4C4C4",
                  }}
                >
                  <Label
                    for="point"
                    sm={1}
                    style={{ fontWeight: "bold", paddingLeft: 0 }}
                  >
                    배점
                  </Label>
                  <Col sm={3}>
                    <Input
                      type="point"
                      name="point"
                      id="point"
                      value={data.point}
                      onChange={handleChange}
                    />
                  </Col>
                </FormGroup>
                <FormGroup
                  row
                  style={{
                    marginLeft: 3,
                    padding: "15px 0px",
                    borderBottom: "1px solid #C4C4C4",
                  }}
                >
                  <Label
                    for="point"
                    sm={1}
                    style={{ fontWeight: "bold", paddingLeft: 0 }}
                  >
                    공개일
                  </Label>
                  <Col sm={3}>
                    <Input
                      type="datetime-local"
                      name="startDate"
                      id="startDate"
                      value={data.startDate}
                      onChange={handleChange}
                    />
                  </Col>
                </FormGroup>
                <FormGroup
                  row
                  style={{
                    marginLeft: 3,
                    padding: "15px 0px",
                    borderBottom: "1px solid #C4C4C4",
                  }}
                >
                  <Label
                    for="point"
                    sm={1}
                    style={{ fontWeight: "bold", paddingLeft: 0 }}
                  >
                    마감일
                  </Label>
                  <Col sm={3}>
                    <Input
                      type="datetime-local"
                      name="endDate"
                      id="endDate"
                      value={data.endDate}
                      onChange={handleChange}
                    />
                  </Col>
                </FormGroup>
                <FormGroup
                  row
                  style={{
                    marginLeft: 3,
                    padding: "15px 0px",
                    borderBottom: "1px solid #C4C4C4",
                    alignItems: "center",
                  }}
                >
                  <Label
                    for="point"
                    sm={1}
                    style={{ fontWeight: "bold", paddingLeft: 0 }}
                  >
                    팀지정
                  </Label>
                  {teamList.results.map((team) => (
                    <Col sm={1}>
                      <Input
                        type="checkbox"
                        name={team.id}
                        onChange={checkboxChange}
                        style={{ marginRight: "5px" }}
                      />
                      {team.name}
                    </Col>
                  ))}
                </FormGroup>
                <FormGroup style={{ marginTop: "30px" }}>
                  <Input
                    type="textarea"
                    name="content"
                    id="assignmentText"
                    value={data.content}
                    onChange={handleChange}
                    style={{ height: "300px" }}
                  />
                </FormGroup>
                <FormGroup style={{ marginTop: "20px" }}>
                  <Label
                    for="imageFile"
                    sm={2}
                    style={{ fontWeight: "bold", paddingLeft: 0 }}
                  >
                    첨부 파일
                  </Label>
                  <Input type="file" onChange={imageChange} />
                </FormGroup>
                <FormGroup style={{ marginTop: "10px" }}>
                  <Label for="solutionFile" sm={2} style={{ fontWeight: "bold" }}>
                    해답 파일
                  </Label>
                  <Input type="file" name="solutionFile" id="solutionFile" />
                </FormGroup>
                <Text>
                  * 해답 파일은 학생들에게 공개되지 않으며 자동 채점을 위한 비교
                  파일입니다.
                </Text>
              </Form>
            </Box>
          );
}

export default AssignmentView
