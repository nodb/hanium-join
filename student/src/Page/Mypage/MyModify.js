import React from "react";
import { useHistory } from "react-router-dom";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

const MyModify = (props) => {
  const history = useHistory();
  const changeMyInfo = () => {
    history.push("/student/mypage/myinfo");
  };

  return (
    <Form>
      <FormGroup row>
        <Label for="exampleID" sm={2}>
          아이디
        </Label>
        <Col sm={10}>
          <Input
            type="id"
            name="id"
            id="exampleid"
            placeholder="아이디를 입력하세요"
          />
        </Col>
      </FormGroup>
      <br />
      <FormGroup row>
        <Label for="examplePassword" sm={2}>
          비밀번호
        </Label>
        <Col sm={10}>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="비밀번호를 입력하세요"
          />
        </Col>
      </FormGroup>
      <br />
      <FormGroup row>
        <Label for="exampleEmail" sm={2}>
          이메일
        </Label>
        <Col sm={10}>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="이메일을 입력하세요"
          />
        </Col>
      </FormGroup>
      <br />
      <FormGroup row>
        <Label for="exampleName" sm={2}>
          이름
        </Label>
        <Col sm={10}>
          <Input
            type="name"
            name="name"
            id="exampleName"
            placeholder="이름을 입력하세요"
          />
        </Col>
      </FormGroup>
      <br />
      <FormGroup row>
        <Label for="exampleMajor" sm={2}>
          학과
        </Label>
        <Col sm={10}>
          <Input
            type="major"
            name="major"
            id="exampleMajor"
            placeholder="학과를 입력하세요"
          />
        </Col>
      </FormGroup>
      <br />
      <FormGroup row>
        <Label for="studentNumber" sm={2}>
          학번
        </Label>
        <Col sm={10}>
          <Input
            type="studentNumber"
            name="studentNumber"
            id="studentNumber"
            placeholder="학번을 입력하세요"
          />
        </Col>
      </FormGroup>
      <br />
      <FormGroup row>
        <Label for="exampleGrade" sm={2}>
          학년
        </Label>
        <Col sm={10}>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </Input>
        </Col>
      </FormGroup>
      <br />
      <FormGroup row>
        <Label for="phoneNumber" sm={2}>
          전화번호
        </Label>
        <Col sm={1}>
          <Input type="phoneNumber" name="phoneNumber" id="phoneNumber" />
        </Col>{" "}
        -
        <Col sm={1}>
          <Input type="phoneNumber" name="phoneNumber" id="phoneNumber" />
        </Col>{" "}
        -
        <Col sm={1}>
          <Input type="phoneNumber" name="phoneNumber" id="phoneNumber" />
        </Col>
      </FormGroup>
      <br />
      <FormGroup row>
        <Label for="exampleFile" sm={2}>
          프로필 사진
        </Label>
        <Col sm={10}>
          <Input type="file" name="file" id="exampleFile" />
        </Col>
      </FormGroup>
      <br />
      <FormText color="muted">
        뒤로가면 작성한 내용이 반영되지 않습니다.
      </FormText>
      <br />
      <br />
      <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button onClick={changeMyInfo}>Submit</Button>
        </Col>
      </FormGroup>
    </Form>
  );
};

export default MyModify;
