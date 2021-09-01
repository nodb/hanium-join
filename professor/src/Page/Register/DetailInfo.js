import React, { useState, useCallback } from "react";
import InputWithLabel from "./InputWithLabel";
import RegisterButton from "./RegisterButton";
import styled from "styled-components";
import AlertBox from "./AlertBox";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../_actions/userAction";
import { typeParameter } from "@babel/types";
import { signupApi } from "../../store/reducer/member";
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
    email: "",
    name: "",
    pw: "",
    pwC: "",
    mobile: "",
    birth: "",
    type: "P"
  })

  const {signupApi} = useMember();
  const history = useHistory();

  const handleError = (name, value) => {
    if (name === "pw") {
      if(value.length <8){
        return {errName:"pw", errMessage: "패스워드는 반드시 8자리 이상"}
      }
    }
    if (name === "pwC") {
      if(data.pw !== value){
        return {errName:"pwC", errMessage: "비밀번호와 일치하지 않습니다."}
      }
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
    setData({
      ...data,
      [name] : value,
      errMessage,
      errName

    });
  }

  
  const onSubmitHandler = async(e) => {
    if (!data.errName && !data.errMessage){
      const body = {
        email: data.email,
        name: data.name,
        password: data.pw,
        mobile: data.mobile,
        birthDate : data.birth,
        type:"P",
      };
      // dispatch(registerUser(body)).then((res) => {
      //   alert("가입이 정상적으로 완료되었습니다.");
      //   props.history.push("/login");
      // });

      try {
        await signupApi(body);
        alert("가입이 정상적으로 완료되었습니다.");
        history.push("/login");
      }catch(e) {
        alert(e)
      }
    }
  }
 

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
      {/* <AlertBox available={emailAvailable}>이미 사용중인 이메일입니다</AlertBox> */}
      {/* <InputWithLabel
        label="아이디"
        name="id"
        placeholder="아이디"
        value={id}
        onChange={idChangeHandler}
      /> */}
      {/* <AlertBox available={idAvailable}>이미 사용중인 아이디입니다</AlertBox> */}
      <InputWithLabel
        label="비밀번호"
        type="password"
        name="password"
        placeholder="비밀번호"
        type="password"
        value={data.pw}
        onChange={handleChange}
      />
      {/* <AlertBox available={passwordAvailable}>8~15자 영문, 숫자 조합</AlertBox> */}
      <InputWithLabel
        label="비밀번호 확인"
        name="passwordConfirm"
        placeholder="비밀번호 확인"
        type="password"
        value={data.pwC}
        onChange={handleChange}
      />
      <AlertBox available={passwordCAvailable}>일치하지 않습니다</AlertBox>
      <InputWithLabel
        label="전화번호"
        name="phone"
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
