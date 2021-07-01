import React from "react";
import { Route, Switch } from "react-router-dom";

import P04 from "./Page/Class/Main/P04";
import P05 from "./Page/Class/Enrolment/P05_04";
import P06 from "./Page/Class/Team/P06";
import P07 from "./Page/Class/Team/P07_05";
import P12 from "./Page/Class/Assignment/P12";
import P13 from "./Page/Class/Assignment/P13";

import AssignmentList from "./Page/Class/Assignment/AssignmentList";
import AddAssignment from "./Page/Class/Assignment/AddAssignment";
import AssignmentModify from "./Page/Class/Assignment/AssignmentModify";

import SideBar from "./Common/SideBar";
import Assignment from "./Page/Class/Assignment/Assignment";

function App() {
  return (
    <>
      <Switch>
        <Route path="/class" exact component={P04} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="row">
            <SideBar />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <Route path="/class/enrol" exact component={P05} />
              <Route path="/class/team" exact component={P06} />
              <Route path="/class/assign" exact component={P07} />
              <Route path="/class/assignment" exact component={Assignment} />
              <Route
                path="/class/assignment/modify"
                exact
                component={AssignmentModify}
              />
              <Route
                path="/class/assignmentList"
                exact
                component={AssignmentList}
              />
              <Route
                path="/class/addAssignment"
                exact
                component={AddAssignment}
              />
              <Route path="/class/assignment/teamView" exact component={P12} />
              <Route
                path="/class/assignment/assignView"
                exact
                component={P13}
              />
            </main>
          </div>
        </div>
      </Switch>
    </>
  );
}

export default App;
