import React from "react";
import Footer from "./Common/Footer";
import Header from "./Common/Header";
<<<<<<< HEAD
import MyPage from "./MyPage";
import Class from "./Class";
import Login from "./Page/Login";
import FindIdPw from "./Page/FindIdPw";

import { Switch, Route, Redirect } from "react-router-dom";
=======

import P04 from "./Page/Class/Main/P04";
import MyPage from "./MyPage";
import Class from "./Class";
import Login from "./Page/Login";
import FindIdPw from "./Page/FindIdPw";

import { Switch, Route, Redirect, Router } from "react-router-dom";
>>>>>>> 3eb3fac170c5980ada387928f12e91ed9e75d89d
import Register from "./Register";

const App = () => {
  return (
    <>
<<<<<<< HEAD
      <Header />
      <Switch>
        <Route path="/class" component={Class} />
        <Route path="/login" exact component={Login} />
        <Route path="/findIdPassword" exact component={FindIdPw} />
        <Route path="/mypage" component={MyPage} />
        <Route path="/register" component={Register} />
        <Redirect to="/login" />
      </Switch>
      <Footer />
=======
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/findIdPassword" exact component={FindIdPw} />
        <Route path="/professor/class" component={Class} />
        <Route path="/professor/mypage" component={MyPage} />
        <Redirect to="/login" />
      </Switch>
>>>>>>> 3eb3fac170c5980ada387928f12e91ed9e75d89d
    </>
  );
};

export default App;
