import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";

import MyInfo from "./Page/Mypage/MyInfo";
import MyClass from "./Page/Mypage/MyClass";
import MyAssignment from "./Page/Mypage/MyAssignment";
import MyModify from "./Page/Mypage/MyModify";
import MySideBar from "./Common/SideBar_Mypage";

import Header from "./Common/Header";
import Footer from "./Common/Footer";

const Contents = styled.div`
  display: flex;
  margin-top: 28px;
`

function App() {
  return (
    <>
      <Header />
      <Contents>
      {/* <div style={{ display: "flex", flexDirection: "column" }}> */}
        {/* <div className="row"> */}
          <MySideBar />
          {/* <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4"> */}
            <Route path="/professor/mypage/myinfo" exact component={MyInfo} />
            <Route path="/professor/mypage/class" exact component={MyClass} />
            <Route path="/professor/mypage/assignment" exact component={MyAssignment} />
            <Route path="/professor/mypage/modify" exact component={MyModify} />
          {/* </main> */}
        {/* </div> */}
      {/* </div> */}
      </Contents>
      <Footer />
    </>
  );
}

export default App;
