import React from "react";
import { Route } from "react-router-dom";
import Footer from "./Common/Footer";
import Header from "./Common/Header";

import MyInfo from "./Page/Mypage/MyInfo";
import MyClass from "./Page/Mypage/MyClass";
import MyAssignment from "./Page/Mypage/MyAssignment";
import MyModify from "./Page/Mypage/MyModify";

import MySideBar from "./Common/SideBar_Mypage";

function MyPage() {
  return (
    <>
      <Header />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="row">
          <MySideBar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Route path="/student/mypage/myinfo" exact component={MyInfo} />
            <Route path="/student/mypage/class" exact component={MyClass} />
            <Route
              path="/student/mypage/myassignment"
              exact
              component={MyAssignment}
            />
            <Route path="/student/mypage/mymodify" exact component={MyModify} />
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MyPage;
