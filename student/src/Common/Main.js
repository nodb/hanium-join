<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from "react";

import SubmitAndDiscuss from "../Page/Class/assignment/SubmitAndDiscuss";
import Navbar from "./Navbar";
import Assignment from "../Page/Class/assignment/Assignment";
import { Switch, Route, Redirect } from "react-router-dom";
import Example from "./Example";
import MypageLayout from "../Page/Mypage/MypageLayout";
import MyInfo from "../Page/Mypage/MyInfo";
import MyClass from "../Page/Mypage/MyClass";
import MyAssignment from "../Page/Mypage/MyAssignment";
import MyModify from "../Page/Mypage/MyModify";

const Main = () => {
  return (
    <main className="flex-shrink-0">
      <Switch>
        <Route path="/class/assignment" component={Example}></Route>
        <Route path="/mypage/myinfo" exact component={MypageLayout}></Route>
      </Switch>
    </main>
  );
};

export default Main;
=======
>>>>>>> master
import React from "react";

import SubmitAndDiscuss from "../Page/Class/assignment/SubmitAndDiscuss";
import Navbar from "./Navbar";
import Assignment from "../Page/Class/assignment/Assignment";
import { Switch, Route, Redirect } from "react-router-dom";
import Example from "./Example";
import MypageLayout from "../Page/Mypage/MypageLayout";
import MyInfo from "../Page/Mypage/MyInfo";
import MyClass from "../Page/Mypage/MyClass";
import MyAssignment from "../Page/Mypage/MyAssignment";
import MyModify from "../Page/Mypage/MyModify";

const Main = () => {
  return (
    <main className="flex-shrink-0">
      <Switch>
        <Route path="/class/assignment" component={Example}></Route>
        <Route path="/mypage/myinfo" exact component={MypageLayout}></Route>
      </Switch>
    </main>
  );
};

export default Main;
<<<<<<< HEAD
=======
>>>>>>> jaeyoung
>>>>>>> master
