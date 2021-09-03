import React, { useState, useCallback } from "react";
import InputWithLabel from "./InputWithLabel";
import RegisterButton from "./RegisterButton";
import styled from "styled-components";
import AlertBox from "./AlertBox";
import { useHistory } from "react-router-dom";
import { typeParameter } from "@babel/types";
import { useMember } from "../../components";
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
    type: "P",
    errName: undefined,
    errMessage: undefined,
  });

  const { signupApi } = useMember();
  const history = useHistory();

  const handleError = (name, value) => {
    if (name === "email") {
      // return { errName: "email", errMessage: "이메일 주소를 잘못 입력하셨습니다."}
    }
    if (name === "pw") {
      if (value.length < 8) {
        return {
          errName: "pw",
          errMessage: "패스워드는 반드시 8자리 이상으로 입력해 주세요.",
        };
      }
    }
    if (name === "pwC") {
      if (data.pw !== value) {
        return {
          errName: "pwC",
          errMessage: "비밀번호와 비밀번호 확인이 일치하지 않습니다.",
        };
      }
    }

    return {
      errName: undefined,
      errMessage: undefined,
    };
  };

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

  // const [id, setId] = useState("");
  // const [idAvailable, setIdAvailable] = useState(true);
  // const [emailAvailable, setEmailAvailable] = useState(true);
  // const [passwordAvailable, setPasswordAvailable] = useState(true);
  // const [passwordCAvailable, setPasswordCAvailable] = useState(true);
  // const [pw, setPw] = useState("");
  // const [pwC, setPwC] = useState("");
  // const [email, setEmail] = useState("");
  // const [name, setName] = useState("");
  // const [mobile, setMobile] = useState("");

  // const history = useHistory();
  // const dispatch = useDispatch();

  // const idChangeHandler = (e) => {
  //   setId(e.currentTarget.value);
  // };
  // const pwChangeHandler = (e) => {
  //   setPw(e.currentTarget.value);
  //   checkPassword(e.currentTarget.value);
  // };

  // const pwCChangeHandler = (e) => {
  //   setPwC(e.currentTarget.value);
  //   checkPasswordC(pw, e.currentTarget.value);
  // };
  // const emailChangeHandler = (e) => {
  //   setEmail(e.currentTarget.value);
  // };
  // const nameChangeHandler = (e) => {
  //   setName(e.currentTarget.value);
  // };
  // const login = () => {};
  // const checkPassword = (pwProp) => {
  //   const regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,12}$/;
  //   setPasswordAvailable(regExp.test(pwProp));
  // };
  // const checkPasswordC = (pwProp, pwCProp) => {
  //   setPasswordCAvailable(pwProp === pwCProp);
  // };
  // const mobileChangeHandler = (e) => {
  //   setMobile(e.currentTarget.value);
  // }

  const onSubmitHandler = async (e) => {
    if (!data.errName && !data.errMessage) {
      const body = {
        email: data.email,
        name: data.name,
        password: data.pw,
        mobile: data.mobile,
        birthDate: data.birth,
        type: "P",
      };
      // dispatch(registerUser(body)).then((res) => {
      //   alert("가입이 정상적으로 완료되었습니다.");
      //   props.history.push("/login");
      // });

      try {
        await signupApi(body);
        alert("가입이 정상적으로 완료되었습니다.");
        history.push("/login");
      } catch (e) {
        alert(e);
      }
    }
  };

  return (
    <Box>
      {data.errName && data.errMessage && (
        <AlertBox available={false}>{data.errMessage}</AlertBox>
      )}

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
      {/* <AlertBox available={false}>이미 사용중인 이메일입니다</AlertBox> */}
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
      {/* <AlertBox available={passwordCAvailable}>일치하지 않습니다</AlertBox> */}
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
