import React from "react";

import SubmitAndDiscuss from "../Page/Class/assignment/SubmitAndDiscuss";
import P09_07 from "../Professor/P09_07";
import P12 from "../Professor/P12";
import Navbar from "./Navbar";

const Main = () => {
  return (
    <main className="flex-shrink-0">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="row">
          <Navbar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            {/* <SubmitAndDiscuss /> */}
            {/* <P09_07 /> */}
            <P12 />
          </main>
        </div>
      </div>
    </main>
  );
};

export default Main;
