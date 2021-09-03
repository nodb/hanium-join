import React from "react";
import MyPage from "./MyPage";
import Main from "./Main";
import Class from "./Class";
import Login from "./Page/Login";
import FindIdPw from "./Page/FindIdPw";

import { Switch, Route, Redirect } from "react-router-dom";
import Register from "./Register";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/findIdPassword" exact component={FindIdPw} />
        <Route path="/professor/main" exact component={Main} />
        <Route path="/professor/class" component={Class} />
        <Route path="/professor/mypage" component={MyPage} />
        <Redirect to="/login" />
      </Switch>
    </>
  );
};

export default App;
