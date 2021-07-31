<<<<<<< HEAD
import React from "react";
import Footer from "./Common/Footer";
import Header from "./Common/Header";
import { Switch, Route, Redirect } from "react-router-dom";
import Assignment from "./Assignment";
import Main from "./Page/Main/Main";
import MyPage from "./MyPage";
import Login from "./Page/Login";
import Register from "./Register";
import FindIdPw from "./Page/FindIdPw";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/findIdPassword" exact component={FindIdPw} />
        <Route path="/class" exact component={Main} />
        <Route path="/mypage" component={MyPage} />
        <Route path="/class/main" component={Assignment} />
        <Redirect to="/login" />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
=======
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ClassLayout from "./ClassLayout";
import MyPage from "./MyPage";
import Login from "./Page/Login";
import Register from "./Register";
import FindIdPw from "./Page/FindIdPw";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/findIdPassword" exact component={FindIdPw} />
        <Route path="/student/class" component={ClassLayout} />
        <Route path="/student/mypage" component={MyPage} />
        <Redirect to="/login" />
      </Switch>
    </>
  );
};

export default App;
>>>>>>> 3eb3fac170c5980ada387928f12e91ed9e75d89d
