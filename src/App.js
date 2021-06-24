import React from "react";
import styled from "styled-components";
import { Route, BrowserRouter } from "react-router-dom";

import S04 from "./S04/S04";
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
      <BrowserRouter>
        <Header />
        <Route path="/" component={S04} exact={true} />
        <Route path="/class" component={App2} />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
