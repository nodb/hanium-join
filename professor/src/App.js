import React from "react";
import { Route, Switch } from "react-router-dom";

import P04 from "./Page/Main/P04";
import P05 from "./Page/Enrolment/P05_04";
import P06 from "./Page/Team/P06";
import P07 from "./Page/Team/P07_05";

import Header from "./Common/Header";
import SideBar from "./Common/SideBar";

import MyPage from "./MyPage";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/class" exact component={P04} />
        <Route path="/mypage" component={MyPage} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="row">
            <SideBar />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <Route path="/class/enrol" exact component={P05} />
              <Route path="/class/team" exact component={P06} />
              <Route path="/class/assign" exact component={P07} />
            </main>
          </div>
        </div>
      </Switch>
    </>
  );
}

export default App;
