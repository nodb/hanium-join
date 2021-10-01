import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";

import Footer from "./Common/Footer";
import Header from "./Common/Header";

import MyInfo from "./Page/Mypage/MyInfo";
import MyClass from "./Page/Mypage/MyClass";
import MyAssignment from "./Page/Mypage/MyAssignment";
import MyModify from "./Page/Mypage/MyModify";

import MySideBar from "./Common/SideBar_Mypage";

const Contents = styled.div`
  display: flex;
  margin-top: 28px;
`

function MyPage() {
  return (
    <>
      <Header />
      <Contents>
          <MySideBar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Route path="/student/mypage/myinfo" exact component={MyInfo} />
            <Route path="/student/mypage/class" exact component={MyClass} />
            <Route
              path="/student/mypage/assignment"
              exact
              component={MyAssignment}
            />
            <Route path="/student/mypage/modify" exact component={MyModify} />
          </main>
      </Contents>
      <Footer />
    </>
  );
}

export default MyPage;
