import React from "react";
import { Route, Switch } from "react-router-dom";

import SideBar from "./Common/SideBar";
import Assignment from "./Page/Class/assignment/Assignment";
import SubmitAndDiscuss from "./Page/Class/assignment/SubmitAndDiscuss";
import ClassMain from "./Page/Class/ClassMain/ClassMain";

function App() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="row">
          <SideBar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Route path="/class/main" exact component={ClassMain} />
            <Route path="/class/main/assignment" exact component={Assignment} />
            <Route
              path="/class/main/assignment/submit"
              exact
              component={SubmitAndDiscuss}
            />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
