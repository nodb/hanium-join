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
<<<<<<< HEAD
  height: 150px;
=======
  height: 200px;
>>>>>>> 3eb3fac170c5980ada387928f12e91ed9e75d89d
  overflow: hidden;
`;

function RegisterBox(props) {
  return (
    <Box>
      <Title>회원가입</Title>
<<<<<<< HEAD
      <Link to="/register/terms">
=======
      <Link
        to="/register/terms"
        style={{ textDecoration: "none", color: "black" }}
      >
>>>>>>> 3eb3fac170c5980ada387928f12e91ed9e75d89d
        <PhoneVerification>
          14세 이상<br></br> 회원가입
        </PhoneVerification>
      </Link>
    </Box>
  );
}

export default RegisterBox;
