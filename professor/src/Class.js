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
import Header from "./Common/Header";
import Footer from "./Common/Footer";

import styled from "styled-components";

const Contents = styled.div`
  display: flex;
  margin-top: 28px;
`

function App() {
  return (
    <>
      <Header />
      <Switch>
    
        <Route path="/professor/class" exact component={P04} />
        <Contents>
            <SideBar />    
              <Route path="/professor/class/enrol" exact component={P05} />
              <Route path="/professor/class/team" exact component={P06} />
              <Route path="/professor/class/assign" exact component={P07} />
              <Route
                path="/professor/class/assignment"
                exact
                component={Assignment}
              />
              <Route
                path="/professor/class/assignment/modify"
                exact
                component={AssignmentModify}
              />
              <Route
                path="/professor/class/assignmentList"
                exact
                component={AssignmentList}
              />
              <Route
                path="/professor/class/addAssignment"
                exact
                component={AddAssignment}
              />
              <Route
                path="/professor/class/assignment/teamView"
                exact
                component={P12}
              />
              <Route
                path="/professor/class/assignment/assignView"
                exact
                component={P13}
              />
      </Contents>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
