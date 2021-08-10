import React, { useState, useCallback } from "react";
import InputWithLabel from "./InputWithLabel";
import RegisterButton from "./RegisterButton";
import styled from "styled-components";
import AlertBox from "./AlertBox";
import { useHistory } from "react-router-dom";
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

function Register(props) {
  const [id, setId] = useState("");
  const [idAvailable, setIdAvailable] = useState(true);
  const [emailAvailable, setEmailAvailable] = useState(true);
  const [passwordAvailable, setPasswordAvailable] = useState(true);
  const [passwordCAvailable, setPasswordCAvailable] = useState(true);
  const [pw, setPw] = useState("");
  const [pwC, setPwC] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const history = useHistory();

  const idChangeHandler = (e) => {
    setId(e.currentTarget.value);
  };
  const pwChangeHandler = (e) => {
    setPw(e.currentTarget.value);
    checkPassword(e.currentTarget.value);
  };

  const pwCChangeHandler = (e) => {
    setPwC(e.currentTarget.value);
    checkPasswordC(pw, e.currentTarget.value);
  };
  const emailChangeHandler = (e) => {
    setEmail(e.currentTarget.value);
  };
  const nameChangeHandler = (e) => {
    setName(e.currentTarget.value);
  };
  const login = () => {};
  const checkPassword = (pwProp) => {
    const regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,12}$/;
    setPasswordAvailable(regExp.test(pwProp));
  };
  const checkPasswordC = (pwProp, pwCProp) => {
    setPasswordCAvailable(pwProp === pwCProp);
  };

  const register = () => {
    history.push("/login");
  };

  return (
    <Box>
      <Title>회원가입</Title>
      <InputWithLabel
        label="이름"
        name="name"
        placeholder="이름"
        value={name}
        onChange={nameChangeHandler}
      />
      <InputWithLabel
        label="이메일"
        name="email"
        placeholder="이메일"
        value={email}
        onChange={emailChangeHandler}
      />
      {/* <AlertBox available={emailAvailable}>이미 사용중인 이메일입니다</AlertBox> */}
      <InputWithLabel
        label="아이디"
        name="id"
        placeholder="아이디"
        value={id}
        onChange={idChangeHandler}
      />
      {/* <AlertBox available={idAvailable}>이미 사용중인 아이디입니다</AlertBox> */}
      <InputWithLabel
        label="비밀번호"
        name="password"
        placeholder="비밀번호"
        type="password"
        value={pw}
        onChange={pwChangeHandler}
      />
      {/* <AlertBox available={passwordAvailable}>8~15자 영문, 숫자 조합</AlertBox> */}
      <InputWithLabel
        label="비밀번호 확인"
        name="passwordConfirm"
        placeholder="비밀번호 확인"
        type="password"
        value={pwC}
        onChange={pwCChangeHandler}
      />
      <AlertBox available={passwordCAvailable}>일치하지 않습니다</AlertBox>
      <InputWithLabel
        label="전화번호"
        name="phone"
        placeholder="전화번호"
        type="tel"
      />
      <InputWithLabel
        label="생년월일"
        name=""
        placeholder="생년월일"
        type="date"
      />
      <RegisterButton onClick={register}>회원가입</RegisterButton>
    </Box>
  );
}

export default Register;
