import React from "react";
import { Route } from "react-router-dom";
<<<<<<< HEAD
=======
import Footer from "./Common/Footer";
import Header from "./Common/Header";
>>>>>>> 3eb3fac170c5980ada387928f12e91ed9e75d89d

import MyInfo from "./Page/Mypage/MyInfo";
import MyClass from "./Page/Mypage/MyClass";
import MyAssignment from "./Page/Mypage/MyAssignment";
import MyModify from "./Page/Mypage/MyModify";

import MySideBar from "./Common/SideBar_Mypage";

function MyPage() {
  return (
    <>
<<<<<<< HEAD
=======
      <Header />
>>>>>>> 3eb3fac170c5980ada387928f12e91ed9e75d89d
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="row">
          <MySideBar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
<<<<<<< HEAD
            <Route path="/mypage/myinfo" exact component={MyInfo} />
            <Route path="/mypage/class" exact component={MyClass} />
            <Route path="/mypage/myassignment" exact component={MyAssignment} />
            <Route path="/mypage/mymodify" exact component={MyModify} />
          </main>
        </div>
      </div>
=======
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
>>>>>>> 3eb3fac170c5980ada387928f12e91ed9e75d89d
    </>
  );
}

export default MyPage;
