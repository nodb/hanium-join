<<<<<<< HEAD
import React from "react";
import Footer from "./Common/Footer";
import Header from "./Common/Header";
import { Switch, Route } from "react-router-dom";
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
      </Switch>
      <Footer />
    </>
  );
};

export default App;
=======
import React from "react";
import Footer from "./Common/Footer";
import Header from "./Common/Header";
import { Switch, Route } from "react-router-dom";
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
      </Switch>
      <Footer />
    </>
  );
};

export default App;
>>>>>>> master
