import React from "react";
import Footer from "./Common/Footer";
import Header from "./Common/Header";
import MyPage from "./MyPage";
import Class from "./Class";
import Login from "./Page/Login";
import FindIdPw from "./Page/FindIdPw";

import { Switch, Route, Redirect } from "react-router-dom";
import Register from "./Register";

const App = () => {
  return (
    <>
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
    </>
  );
};

export default App;
