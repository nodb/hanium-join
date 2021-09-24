import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import InputWithLabel from "./InputWithLabel";
import FindButton from "./FindButton";
import Modal from "./Modal";
import { useMember } from "../../components";
import { getDataFromStorage } from "../../utils/storage";
import { useHistory } from "react-router";

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

const SendBox = styled.button`
  padding: 6px 12px;
  margin-top: 5px;
  color: #fff;
  background-color: #6c757d;
  border-radius: 5px;
  font-size: 15px;
`;

const EmailText = styled.div`
  background: #8f8f8f;
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  padding: 10px 30px;
  font-size: 20px;
  border-radius: .3rem;
  transform: translate(-50%, -50%);
`;

const ChangePw = () => {
  const history = useHistory();
  const { changePwApi } = useMember();
  const [data, setData] = useState({
    pw: "",
    pwC: "",
  });
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  const submitHandler = async (e) => {
    const request = {
        password: data.pw,
    };
    const token = getDataFromStorage().access_token;
    try {
      const response = await changePwApi(token, request);
      if(response.data.success) {
        alert("비밀번호를 변경하였습니다.");
        history.push("/login");
      }
    } catch (e) {
      console.log(e);
      alert("비밀번호 변경 실패");
    }
  }
  return (
    <Box>
      <Title>비밀번호 변경</Title>
      <InputWithLabel
        label="비밀번호"
        name="pw"
        placeholder="비밀번호"
        type="password"
        value={data.pw}
        onChange={handleChange}
      />
      <InputWithLabel
        label="비밀번호 확인"
        name="pwC"
        placeholder="비밀번호 확인"
        type="password"
        value={data.pwC}
        onChange={handleChange}
      />
      <FindButton onClick={submitHandler}>비밀번호 변경</FindButton>
    </Box>
  );
}

export default ChangePw;
