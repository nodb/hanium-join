import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import P04 from "./Pages/Main/P04";
import App2 from "./App2";

import Header from "./Common/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Route path="/class" exact component={P04} />
        <Route path="/class/enrol" exact component={App2} />
      </BrowserRouter>
    </>
  );
}

export default App;
