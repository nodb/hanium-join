import React from "react";
import styled from "styled-components";
import { Route, BrowserRouter } from "react-router-dom";

import S04 from "./Pages/Main/Main";
import App2 from "./App2";

import Header from "./Common/Header";

const Footer = styled.div`
  width: 100%;
  background-color: #f8f8f8;
  height: 200px;
`;

function App() {
  return (
    <>
      <Header />
      <Route path="/class" exact component={S04} />
      <Route path="/class/main" component={App2} />
      <Footer />
    </>
  );
}

export default App;
