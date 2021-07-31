import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
<<<<<<< HEAD
import { Provider } from "react-redux";

ReactDOM.render(
  <BrowserRouter basename="/student">
=======

ReactDOM.render(
  <BrowserRouter>
>>>>>>> 3eb3fac170c5980ada387928f12e91ed9e75d89d
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
