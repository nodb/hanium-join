import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import { useAssignments } from "../../../components/Use";

const P09_07 = () => {
  const history = useHistory();

  const { createAssignmentsApi } = useAssignments();

  const [data, setData] = useState({
    name: "",
    content: "",
  });

  const [image, setImage] = useState(null);

  const createHandler = async () => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("point", data.point);
    formData.append("startDate", data.startDate);
    formData.append("endDate", data.endDate);
    formData.append("content", data.content);
    formData.append("progress", 1);
    formData.append("classCode", "AZSVBFV");
    formData.append("teams", []);
    formData.append("image", image);
    console.log(image);
    try {
      await createAssignmentsApi(formData);
      history.push("/professor/class/assignmentList");
    } catch (e) {
      alert(e);
    }
  };

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
    <Form>
      <Button size="sm" style={{ marginTop: "20px" }} onClick={createHandler}>
        완료
      </Button>
      <FormGroup
        row
        style={{
          marginLeft: 3,
          padding: "15px 0px",
          borderBottom: "1px solid #C4C4C4",
        }}
      >
        <Label for="name" sm={2} style={{ fontWeight: "bold", paddingLeft: 0 }}>
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
          sm={2}
          style={{ fontWeight: "bold", paddingLeft: 0 }}
        >
          배점
        </Label>
        <Col sm={4}>
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
          sm={2}
          style={{ fontWeight: "bold", paddingLeft: 0 }}
        >
          공개일
        </Label>
        <Col sm={5}>
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
          sm={2}
          style={{ fontWeight: "bold", paddingLeft: 0 }}
        >
          마감일
        </Label>
        <Col sm={5}>
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
          sm={2}
          style={{ fontWeight: "bold", paddingLeft: 0 }}
        >
          팀지정
        </Label>
        {
          <Col>
            <Input
              type="checkbox"
              name="point"
              id="point"
              value={data.point}
              onChange={handleChange}
            />
            1팀
          </Col>
        }
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
    </Form>
  );
};

export default P09_07;
