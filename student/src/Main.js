import React from "react";
import { Route } from "react-router-dom";

import S04 from "./Page/Class/Main/Main";
import Header from "./Common/Header";

const Main = () => {
  return (
    <>
      <Header />
      <Route path="/student/main" exact component={S04} />
    </>
  );
};

export default Main;
