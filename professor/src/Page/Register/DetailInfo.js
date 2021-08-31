import React, { useState, useCallback } from "react";
import InputWithLabel from "./InputWithLabel";
import RegisterButton from "./RegisterButton";
import styled from "styled-components";
import AlertBox from "./AlertBox";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { typeParameter } from "@babel/types";

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
  const [data, setData] = useState({
    name: "",
    email: "",
    pw: "",
    pwC: "",
    mobile: "",
    birth: "",
    type: "p",
    errName: undefined,
    errMessage: undefined,
  });

  const handleError = (name, value) => {};
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    const { errName = undefined, errMessage = undefined } = handleError(
      name,
      value
    );

    setData({
      ...data,
      [name]: value,
      errName,
      errMessage,
    });
  };

  const onSubmitHandler = (e) => {};

  return (
    <Box>
      <Title>회원가입</Title>
      <InputWithLabel
        label="이름"
        type="text"
        name="name"
        placeholder="이름"
        value={data.name}
        onChange={handleChange}
      />
      <InputWithLabel
        label="이메일"
        type="email"
        name="email"
        placeholder="이메일"
        value={data.email}
        onChange={handleChange}
      />
      {data.errorName && data.errorMessage && (
        <AlertBox available={false}>이미 사용중인 이메일입니다</AlertBox>
      )}
      <InputWithLabel
        label="비밀번호"
        name="pw"
        placeholder="비밀번호"
        type="password"
        value={data.pw}
        onChange={handleChange}
      />
      {/* <AlertBox available={passwordAvailable}>8~15자 영문, 숫자 조합</AlertBox> */}
      <InputWithLabel
        label="비밀번호 확인"
        name="pwC"
        placeholder="비밀번호 확인"
        type="password"
        value={data.pwC}
        onChange={handleChange}
      />
      <InputWithLabel
        label="전화번호"
        name="mobile"
        placeholder="전화번호"
        type="text"
        value={data.mobile}
        onChange={handleChange}
      />
      <InputWithLabel
        label="생년월일"
        name="birth"
        placeholder="생년월일"
        type="date"
        value={data.birth}
        onChange={handleChange}
      />
      <RegisterButton onClick={onSubmitHandler}>회원가입</RegisterButton>
    </Box>
  );
}

export default Register;
