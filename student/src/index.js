import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
<Provider store={store}>
  <BrowserRouter basename="/student">  
    <App />
  </BrowserRouter>,
</Provider>,
  document.getElementById('root')
);

