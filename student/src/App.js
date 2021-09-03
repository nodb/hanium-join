<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> master
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
<<<<<<< HEAD
=======
>>>>>>> jaeyoung
>>>>>>> master
