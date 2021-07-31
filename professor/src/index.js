import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
<<<<<<< HEAD
import store from "./store";
=======
import reducer from "./_reducers";

import { applyMiddleware, createStore } from "redux";
import reduxThunk from "redux-thunk";
import promiseMiddleware from "redux-promise";

>>>>>>> 3eb3fac170c5980ada387928f12e91ed9e75d89d
// import { Provider } from "react-redux";
// import store from "./store";

const createStoreWithMd = applyMiddleware(
  promiseMiddleware,
  reduxThunk
)(createStore);

ReactDOM.render(
<<<<<<< HEAD
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
=======
  <React.StrictMode>
    <Provider 
      store={createStoreWithMd(
        reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
    )}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
>>>>>>> 3eb3fac170c5980ada387928f12e91ed9e75d89d
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
