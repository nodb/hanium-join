import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";
import { useHistory, useParams } from "react-router-dom";
import { useAssignments, useTeams } from "../../../components/Use";
import styled from "styled-components";

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

const P09_07 = () => {
  const history = useHistory();
  const { code } = useParams();

  const { createAssignmentsApi } = useAssignments();
  const { teamList, listAllTeams } = useTeams();

  const [data, setData] = useState({
    name: "",
    content: "",
  });

  const [teams, setTeams] = useState([]);

  const checkboxChange = (e) => {
    setTeams({
      ...teams,
      [e.target.name]: e.target.checked,
    });
  };

  const [image, setImage] = useState(null);

  const createHandler = async () => {
    const team = [];
    const keys = Object.keys(teams);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const value = teams[key];
      if (value === true) team.push(key);
    }

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("point", data.point);
    formData.append("startDate", data.startDate);
    formData.append("endDate", data.endDate);
    formData.append("content", data.content);
    formData.append("progress", 1);
    formData.append("classCode", code);
    formData.append("teams", team);
    formData.append("image", image);
    console.log(image);
    try {
      await createAssignmentsApi(formData);
      history.goBack();
    } catch (e) {
      alert(e);
    }
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        await listAllTeams(code);
      } catch (e) {
        alert(e);
      }
    };
    fetch();
  }, []);

  const imageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box>
      <Form>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button onClick={createHandler}>완료</button>
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
          <Label sm={11}  style={{ marginLeft: "5px" }}>
            <Input
              type="textarea"
              name="content"
              id="assignmentText"
              value={data.content}
              onChange={handleChange}
              style={{ height: "300px" }}
            />
          </Label>
        </FormGroup>
        <FormGroup style={{ marginTop: "20px" }}>
          <Label
            for="imageFile"
            sm={2}
            style={{ fontWeight: "bold", paddingLeft: 0 }}
          >
            첨부 파일
          </Label>
          <Input
            type="file"
            name="imagefile"
            id="imageFile"
            onChange={imageChange}
          />
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
};

export default P09_07;
