import React from "react";
import { Route, Switch } from "react-router-dom";

import P05 from "./Pages/Enrolment/P05_04";
import P06 from "./Pages/Team/P06";
import P07 from "./Pages/Team/P07_05";
import SideBar from "./Common/SideBar";

function App2() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="row">
          <SideBar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Switch>
              <Route path="/class/enrol" component={P05} />
              <Route path="/class/team" component={P06} />
              <Route path="/class/assign" component={P07} />
            </Switch>
          </main>
        </div>
      </div>
    </>
  );
}

export default App2;
