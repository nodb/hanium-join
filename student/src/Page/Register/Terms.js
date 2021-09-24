import React, { useState, useCallback, useEffect } from "react";
import InputWithLabel from "./InputWithLabel";
import RegisterButton from "./RegisterButton";
import styled from "styled-components";
import AlertBox from "./AlertBox";
import { Link, useHistory, useLocation } from "react-router-dom";
import axios from "axios";


const Box = styled.div`
  display: block;
  width: 700px;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 100px;
`;
const Title = styled.div`
  text-align: center;
  width: 700px;
  display: block;
  font-size: 30px;
  margin-bottom: 0px;
`;
const Sub = styled.div`
  text-align: left;
  width: 700px;
  display: block;
  font-size: 22px;
  margin-top: 100px;
  margin-bottom: 0px;
`;
const TermBox = styled.div`
  margin-top: 50px;
  margin-bottom: 10px;
  width: 700px;
  height: 230px;
  display: block;
  overflow-y: scroll;
  background: #10101010;
`;
const AgreeBox = styled.div`
  display: block;
`;

const RegisterBox = () => {

  const [terms, setTerms] = useState("");
  useEffect(async () => {
    const response = await axios.get("/api/v1/terms");
    setTerms(response.data.result);
  },[]);
  const [isChecked, setChecked] = useState(false);
  const history = useHistory();

  const handleChange = (e) => {
    setChecked(e.target.checked);
  }


  const handleAgreeBox = () => {
    if (isChecked) {
      history.push("/register/detailInfo");
    } else {
      alert("이용 약관에 동의해 주세요.");
    }
  }

  return (
    <Box>
      <Title>회원가입</Title>
      <Sub>이용 약관 동의</Sub>
      <TermBox><pre>{terms}</pre></TermBox>

      <AgreeBox>
        <input type="checkbox" onChange={handleChange}/>
        <span>동의합니다</span>
      </AgreeBox>
        <RegisterButton
          style={{
            margin: "30px 150px 0 150px",
            width: "400px",
            fontSize: "18px",
          }}

          onClick={handleAgreeBox}
        >
          동의하고 넘어가기
        </RegisterButton>
    </Box>
  );
}

export default RegisterBox;
