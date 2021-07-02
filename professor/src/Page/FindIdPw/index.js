import React, { useState, useCallback } from "react";
import styled from "styled-components";
import InputWithLabel from "./InputWithLabel";
import FindButton from "./FindButton";

const Label = styled.div`
  font-size: 1.2rem;
  margin-top: 1rem;
  margin-bottom: 0.75rem;
`;
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

function FindIdPw() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const idChangeHandler = (e) => {
    setId(e.currentTarget.value);
  };
  const pwChangeHandler = (e) => {
    setPw(e.currentTarget.value);
  };
  const submitHandler = () => {};
  return (
    <Box>
      <Title>아이디/비밀번호 찾기</Title>
      <Label>아이디 찾기</Label>
      <FindButton>아이디 찾기</FindButton>
      <br></br>
      <Label>비밀번호 찾기</Label>
      <InputWithLabel
        label="아이디"
        name="id"
        placeholder="아이디"
        type="text"
        value={id}
        onChange={idChangeHandler}
      />
      <FindButton>비밀번호 찾기</FindButton>
    </Box>
  );
}

export default FindIdPw;
