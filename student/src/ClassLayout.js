import React from "react";
import { Route, Switch } from "react-router-dom";

import Footer from "./Common/Footer";
import Header from "./Common/Header";
import SideBar from "./Common/SideBar";
import Assignment from "./Page/Class/assignment/Assignment";
import SubmitAndDiscuss from "./Page/Class/assignment/SubmitAndDiscuss";
import ClassMain from "./Page/Class/ClassMain/ClassMain";
import Main from "./Page/Main/Main";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/student/class" exact component={Main} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="row">
            <SideBar />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <Route path="/student/class/main" exact component={ClassMain} />
              <Route
                path="/student/class/main/assignment/:id"
                exact
                component={Assignment}
              />
              <Route
                path="/student/class/main/assignment/:id/submit"
                exact
                component={SubmitAndDiscuss}
              />
            </main>
          </div>
        </div>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
