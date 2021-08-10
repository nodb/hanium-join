import React from "react";
import DetailInfo from "./Page/Register/DetailInfo";
import RegisterBox from "./Page/Register/RegisterBox";
import Terms from "./Page/Register/Terms";
import { Route, Switch } from "react-router-dom";

function Register() {
  return (
    <>
      <Route path="/register/box" exact component={RegisterBox} />
      <Route path="/register/terms" exact component={Terms} />
      <Route path="/register/detailInfo" exact component={DetailInfo} />
    </>
  );
}

export default Register;
