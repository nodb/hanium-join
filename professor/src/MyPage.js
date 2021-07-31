import React from "react";
import { Route } from "react-router-dom";

import MyInfo from "./Page/Mypage/MyInfo";
import MyClass from "./Page/Mypage/MyClass";
import MyAssignment from "./Page/Mypage/MyAssignment";
import MyModify from "./Page/Mypage/MyModify";
<<<<<<< HEAD

import MySideBar from "./Common/SideBar_Mypage";

function App() {
  return (
    <>
=======
import MySideBar from "./Common/SideBar_Mypage";

import Header from "./Common/Header";
import Footer from "./Common/Footer";

function App() {
  return (
    <>
      <Header />
>>>>>>> 3eb3fac170c5980ada387928f12e91ed9e75d89d
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="row">
          <MySideBar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
<<<<<<< HEAD
            <Route path="/mypage/myinfo" exact component={MyInfo} />
            <Route path="/mypage/class" exact component={MyClass} />
            <Route path="/mypage/assignment" exact component={MyAssignment} />
            <Route path="/mypage/modify" exact component={MyModify} />
          </main>
        </div>
      </div>
=======
            <Route path="/professor/mypage/myinfo" exact component={MyInfo} />
            <Route path="/professor/mypage/class" exact component={MyClass} />
            <Route
              path="/professor/mypage/assignment"
              exact
              component={MyAssignment}
            />
            <Route path="/professor/mypage/modify" exact component={MyModify} />
          </main>
        </div>
      </div>
      <Footer />
>>>>>>> 3eb3fac170c5980ada387928f12e91ed9e75d89d
    </>
  );
}

export default App;
