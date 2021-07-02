import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  margin-bottom: 0px;
`;
const PhoneVerification = styled.div`
  margin: 150px;
  text-align: center;
  background-color: grey;
  display: block;
  font-size: 30px;
  padding-top: 50px;
  width: 200px;
  height: 150px;
  overflow: hidden;
`;

function RegisterBox(props) {
  return (
    <Box>
      <Title>회원가입</Title>
      <Link to="/register/terms">
        <PhoneVerification>
          14세 이상<br></br> 회원가입
        </PhoneVerification>
      </Link>
    </Box>
  );
}

export default RegisterBox;
