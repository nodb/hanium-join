import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";

ReactDOM.render(
  <BrowserRouter basename="/student">
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
