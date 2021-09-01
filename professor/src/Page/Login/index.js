import React, { useState } from "react";
import { Link, useHistory, withRouter } from "react-router-dom";
import styled from "styled-components";
import InputWithLabel from "./InputWithLabel";
import LoginButton from "./LoginButton";

const Box = styled.div`
  display: block;
  width: 500px;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 100px;
`;
const Title = styled.div`
  text-align: center;
  width: 500px;
  display: block;
  font-size: 30px;
  margin-bottom: 50px;
`;

const Login = () => {

  const { loginApi } = useMember();

  const [data, setData] = useState(
    {
      id: "",
      password: "",
    }
  )

  const handleChange = (e) =>{
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }
  // const [id, setId] = useState("");
  // const [pw, setPw] = useState("");

  // const idChangeHandler = (e) => {
  //   setId(e.currentTarget.value);
  // };

  // const pwChangeHandler = (e) => {
  //   setPw(e.currentTarget.value);
  // };

  // const history = useHistory();

  const submitHandler = () => {
    try{
      const request = {
        email: data.email,
        password: data.password,

      }

      await loginApi(request)
      history.pushState("/professor/class");
    }catch(e){
      alert(e);
    }
  };
  return (
    <Box>
      <Title>로그인</Title>
      <InputWithLabel
        label="아이디"
        name="email"
        type="email"
        placeholder="이메일"
        value={data.email}
        onChange={handleChange}
      />
      <InputWithLabel
        label="비밀번호"
        name="password"
        placeholder="비밀번호"
        type="password"
        value={data.pw}
        onChange={handleChange}
      />
      <LoginButton onClick={submitHandler}>로그인</LoginButton>
      <Link
        to="/findIdPassword"
        style={{ textDecoration: "none", color: "black" }}
      >
        <span>아이디 비밀번호 찾기</span>
      </Link>
      <br></br>
      <Link
        to="/register/box"
        style={{ textDecoration: "none", color: "black" }}
      >
        <span>회원가입</span>
      </Link>
    </Box>
  );
}

export default withRouter(Login);
