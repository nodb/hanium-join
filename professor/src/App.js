import React from "react";
import Footer from "./Common/Footer";
import Header from "./Common/Header";

import P04 from "./Page/Class/Main/P04";
import MyPage from "./MyPage";
import Class from "./Class";
import Login from "./Page/Login";
import FindIdPw from "./Page/FindIdPw";

import { Switch, Route, Redirect, Router } from "react-router-dom";
import Register from "./Register";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/findIdPassword" exact component={FindIdPw} />
        <Route path="/professor/class" component={Class} />
        <Route path="/professor/mypage" component={MyPage} />
        <Redirect to="/login" />
      </Switch>
    </>
  );
};

export default App;
