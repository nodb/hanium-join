import { applyMiddleware, createStore } from "redux";
import reducer from "./reducer";
import penderMiddleware from "redux-pender";
import { composeWithDevTools } from "redux-devtools-extension";

//process.env.mode ===dev일 경우에만
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(penderMiddleware()))
);

export default store;
