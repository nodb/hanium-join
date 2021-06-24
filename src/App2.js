import React from "react";
import { Route } from "react-router-dom";

import S05 from "./S05/S05_05_06";
import SideBar from "./Common/SideBar";

function App() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="row">
          <SideBar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Route path="/class" component={S05} exact={true} />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
