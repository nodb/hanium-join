import React from "react";
import { Route, Switch } from "react-router-dom";

import P05 from "./Page/Class/Enrolment/P05_04";
import P06 from "./Page/Class/Team/P06";
import P07 from "./Page/Class/Team/SetTeam";
import P12 from "./Page/Class/Assignment/P12";
import P13 from "./Page/Class/Assignment/P13";

import AssignmentList from "./Page/Class/Assignment/AssignmentList";
import AddAssignment from "./Page/Class/Assignment/AddAssignment";
import AssignmentModify from "./Page/Class/Assignment/AssignmentModify";

import Report from "./Page/Class/Report";

import SideBar from "./Common/SideBar";
import Assignment from "./Page/Class/Assignment/Assignment";
import Header from "./Common/Header";
import Footer from "./Common/Footer";

import styled from "styled-components";

const Contents = styled.div`
  display: flex;
  margin-top: 28px;
`;

const ClassParent = () => {
  return (
    <>
      <SideBar />
      <Switch>
        <Route path="/professor/class/:code/enrol" exact component={P05} />
        <Route path="/professor/class/:code/team" exact component={P06} />
        <Route path="/professor/class/:code/assign" exact component={P07} />
        <Route path="/professor/class/:code/report" exact component={Report} />
        <Route
          path="/professor/class/:code/assignment/:id"
          exact
          component={Assignment}
        />
        <Route
          path="/professor/class/:code/assignment/:id/modify"
          component={AssignmentModify}
        />
        <Route
          path="/professor/class/:code/assignmentList"
          exact
          component={AssignmentList}
        />
        <Route
          path="/professor/class/:code/addAssignment"
          exact
          component={AddAssignment}
        />
      </Switch>
    </>
  );
};

const Class = () => {
  return (
    <>
      <Header />
      <Switch>
        <Contents>
          <Route path="/professor/class/:code" component={ClassParent} />
        </Contents>
      </Switch>
      <Footer />
    </>
  );
};

export default Class;
