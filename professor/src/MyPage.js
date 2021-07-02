import React from "react";
import { Route } from "react-router-dom";

import MyInfo from "./Page/Mypage/MyInfo";
import MyClass from "./Page/Mypage/MyClass";
import MyAssignment from "./Page/Mypage/MyAssignment";
import MyModify from "./Page/Mypage/MyModify";

import MySideBar from "./Common/SideBar_Mypage";

function App() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="row">
          <MySideBar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Route path="/mypage/myinfo" exact component={MyInfo} />
            <Route path="/mypage/class" exact component={MyClass} />
            <Route path="/mypage/assignment" exact component={MyAssignment} />
            <Route path="/mypage/modify" exact component={MyModify} />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
