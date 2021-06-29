import React from "react";
import { Route, Switch } from "react-router-dom";

import P04 from "./Pages/Main/P04";
import P05 from "./Pages/Enrolment/P05_04";
import P06 from "./Pages/Team/P06";
import P07 from "./Pages/Team/P07_05";

import Header from "./Common/Header";
import SideBar from "./Common/SideBar";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/class" exact component={P04} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="row">
            <SideBar />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <Switch>
                <Route path="/class/enrol" exact component={P05} />
                <Route path="/class/team" exact component={P06} />
                <Route path="/class/assign" exact component={P07} />
              </Switch>
            </main>
          </div>
        </div>
      </Switch>
    </>
  );
}

export default App;
