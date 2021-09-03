import React, {useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import InputWithLabel from "../Register/InputWithLabel";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

import { useMember } from "../../components";
import { getDataFromStorage } from "../../utils/storage";
import styled from "styled-components";
import AlertBox from "../Register/AlertBox";

const Box = styled.div`
`;

const Page = styled.div`
color: #3D3D3D;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 20px;
margin-top: 27px;
`;

const Hr = styled.hr`
width: 1032px;
height: 0px;
border: 4px solid #C4C4C4;
`

function MyModify(props) {

  const history = useHistory();
  // const changeMyInfo = () => {
  //   history.push("/professor/mypage/myinfo");
  // };

  const professor = getDataFromStorage();

  const [data, setData] = useState();

  const [image, setImage] = useState(null);
  const { memberInfo, getInfo, infoModifyApi } = useMember();

  const imageChange = (e) => {
    setImage(e.target.files[0]);
  }

  useEffect(()=> {
    setData({
      email: memberInfo.email,
      name: memberInfo.name,
      pw: memberInfo.password,
      pwC: memberInfo.password,
      mobile: memberInfo.mobile,
      professorID : memberInfo.professorID,
      department: memberInfo.department,
      birthDate: memberInfo.birthDate,
      type:"P",
      errName: undefined,
      errMessage: undefined,})
  },[]);

useEffect(() => {
  const fetch = async  () => {
    try {
      await getInfo(professor.id);

    } catch(err) {
      console.log(err);
    }
  }
  fetch();
}, [])

const handleError = (name, value) => {
  if (name === "email") { 
    // return { errName: "email", errMessage: "이메일 주소를 잘못 입력하셨습니다."}
  }
  if (name === "password") {
    if (value.length < 8) {
      return { errName: "pw", errMessage: "패스워드는 반드시 8자리 이상으로 입력해 주세요."}
    }
  }
  if (name === "pwC") {
    if (data.pw !== value) {
      return { errName: "pwC", errMessage: "비밀번호와 비밀번호 확인이 일치하지 않습니다."}
    }
  }

  return {
    errName: undefined,
    errMessage: undefined
  }
}

const handleChange = (e) => {
  const name = e.target.name;
  const value = e.target.value;

  const {errName=undefined, errMessage=undefined } = handleError(name, value);

  setData({
    ...data,
    [name] : value,
    errName,
    errMessage
  });
}

const onModifyHandler = async (e) => {
  if (!data.errName && !data.errMessage  ) {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("name", data.name);
    formData.append("password", data.pw);
    formData.append("mobile", data.mobile);
    formData.append("professorID", data.professorID);
    formData.append("department", data.department);
    formData.append("birthDate", data.birthDate);
    formData.append("profileImg", image);

    try{
      await infoModifyApi(professor.id, formData);
      alert("수정되었습니다.");
      history.push("/professor/mypage/myinfo");
    } catch(e) {
      alert("항목을 다 채워주세요.")
    }
}
}
if (!data) return "로딩중";
console.log(image);
  return (
    <Box>
    <Page>
      개인 정보 수정
    </Page>
    <Hr />

      {data.errName && data.errMessage && (
      <AlertBox available={false}>{data.errMessage}</AlertBox>
      )}
      
    <Form>
    <FormGroup row>
        <Label for="" sm={2}>
          이메일
        </Label>
        <Col sm={10}>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder={memberInfo.email}
            onChange={handleChange}
            value={data.email}
          />
        </Col>
      </FormGroup>
      <br />
      <FormGroup row>
        <Label for="" sm={2}>
          비밀번호
        </Label>
        <Col sm={10}>
          <Input
            type="password"
            name="pw"
            value={data.pw}
            onChange={handleChange}
          />
        </Col>
      </FormGroup>
      <br />
      <FormGroup row>
        <Label sm={2}>
          비밀번호 확인
        </Label>
        <Col sm={10}>
          <Input
            type="password"
            name="pwC"
            id="examplePassword"
            onChange={handleChange}
            value={data.pwC}
          />
        </Col>
      </FormGroup>
      <br />
      <FormGroup row>
        <Label sm={2}>
          이름
        </Label>
        <Col sm={10}>
          <Input
            type="name"
            name="name"
            id="exampleName"
            placeholder= {memberInfo.name}
            onChange={handleChange}
            value={data.name}
          />
        </Col>
      </FormGroup>
      <br />
      <FormGroup row>
        <Label sm={2}>
          학과
        </Label>
        <Col sm={10}>
          <Input
            type="department"
            name="department"
            placeholder="학과를 입력하세요"
            onChange={handleChange}
            value={data.department}
          />
        </Col>
      </FormGroup>
      <br />
      <FormGroup row>
        <Label sm={2}>
          학번
        </Label>
        <Col sm={10}>
          <Input
            type="professorID"
            name="professorID"
            placeholder="학번을 입력하세요"
            onChange={handleChange}
            value={data.professorID}
          />
        </Col>
      </FormGroup>
      <br />
      <FormGroup row>
      <InputWithLabel
        label="생년월일"
        name="birth"
        placeholder="생년월일"
        type="date"
        value={data.birthDate}
        onChange={handleChange}
      />
      </FormGroup>
      <br />
      <FormGroup row>
      <InputWithLabel
        label="전화번호"
        name="mobile"
        placeholder="전화번호"
        type="text"
        value={data.mobile}
        onChange={handleChange}
      />
      </FormGroup>
      <br />
      <FormGroup row>
        <Label sm={2}>
          프로필 사진
        </Label>
        <Col sm={10}>
          <Input type="file" name="profileImg" onChange={imageChange} value={image}/>
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
          <Button onClick={onModifyHandler}>Submit</Button>
        </Col>
      </FormGroup>
    </Form>
    </Box>
  );
};


export default MyModify;
