import React from "react";
import { Route } from "react-router-dom";

import S05 from "./Pages/Class/ClassMain/ClassMain";
import SideBar from "./Common/SideBar";

function App2() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="row">
          <SideBar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Route path="/class/main" exact component={S05} />
          </main>
        </div>
      </div>
    </>
  );
}

export default App2;
