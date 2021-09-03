import React from "react";
import { Route } from "react-router-dom";

import P04 from "./Page/Class/Main/P04";
import Header from "./Common/Header";

const Main = () => {
  return (
    <>
      <Header />
      <Route path="/professor/main" exact component={P04} />
    </>
  );
};

export default Main;
