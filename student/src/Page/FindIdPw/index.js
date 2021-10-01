import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import InputWithLabel from "./InputWithLabel";
import FindButton from "./FindButton";
import Modal from "./Modal";
import Header from "../../Common/Header";
import Footer from "../../Common/Footer";

const Label = styled.div`
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 25px;
line-height: 29px;
margin-left: 144px;
margin-top: 60px;
color: #686868;
margin-bottom: 20px;
`;
const Box = styled.div`
  display: block;
  width: 730px;
  margin: 0 auto;
  margin-bottom: 100px;
  background-color: white;
  border: 1px solid #EF8F88;
  height: 502px;

filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
`;
const TextBox = styled.div`
  width: 730px;
  height: 117px;
  background-color: #EF8F88;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 47px;
  text-align: center;
  margin: 0 auto;
  padding-top: 39px;
  margin-top: 85px;

  color: #FFFFFF;
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
`

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

const FindIdPw = () => {
  const [data, setData] = useState({
    findEmail: false,
    findPw: false,
    sended: false,
    emailRes: "",
    name: "",
    mobile: "",
    email: "",
    pw: "",
    verifyCode: "",
  });

  const changeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const openFindEmail = () => {
    setData({
      ...data,
      findEmail: true,
    });
  };

  const closeFindEmail = () => {
    setData({
      ...data,
      findEmail: false,
      sended: false,
    });
  };

  const sendSmsHandler = async () => {
    console.log("문자전송");
    const body = {
      name: data.name,
      mobile: data.mobile,
    };
    const res = await axios.post("/api/v1//verify/sms", body);

    if (res.data.success) {
      setData({
        ...data,
        sended: true,
      });
    }
  };

  const submitHandler = async () => {
    const body = {
      name: data.name,
      mobile: data.mobile,
      verifyCode: data.verifyCode,
    };
    const res = await axios.post("/api/v1/verify/sms/verify", body);

    console.log(res);

    if (res.data.success) {
      setData({
        ...data,
        emailRes: res.data.email,
      });
    } else {
      console.log("정보가 없습니다.");
      alert("정보가 없습니다.");
    }
  };

  useEffect(() => {
    if (data.mobile.length === 10) {
      setData({
        ...data,
        mobile: data.mobile.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'),
      });
    }
    if (data.mobile.length === 13) {
      setData({
        ...data,
        mobile: data.mobile.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'),
      });
    }
  }, [data.mobile]);

  return (
    <>
    <Header />
      <TextBox>이메일/비밀번호 찾기</TextBox>
    <Box>
      <Label>이메일 찾기</Label>
      <FindButton onClick={openFindEmail}>이메일 찾기</FindButton>
      <br></br>
      <Label>비밀번호 찾기</Label>
      <InputWithLabel
        name="email"
        placeholder="이메일(아이디)를 입력하세요"
        type="text"
        value={data.email}
        onChange={changeHandler}
      />
      <FindButton>비밀번호 찾기</FindButton>



    </Box>
      <Modal open={ data.findEmail } close={ closeFindEmail } submit={ submitHandler } header="이메일 찾기">
        {data.emailRes ? <EmailText>이메일은 { data.emailRes }입니다</EmailText> : null }
        <Label>이름</Label>
        <InputWithLabel
          name="name"
          placeholder="이름"
          type="text"
          value={data.name}
          onChange={changeHandler}
        />
        <Label>전화번호</Label>
        <InputWithLabel
          name="mobile"
          placeholder="숫자만 입력"
          type="text"
          value={data.mobile}
          onChange={changeHandler}
        />
        <SendBox onClick={sendSmsHandler}>{!data.sended? "전송" : "재전송"}</SendBox>
        <Label>인증번호</Label>
        <InputWithLabel
          name="verifyCode"
          placeholder="인증번호"
          type="text"
          value={data.verifyCode}
          onChange={changeHandler}
        />
      </Modal>
    <Footer />
    </>
  );
}

export default FindIdPw;
