import { applyMiddleware, createStore } from "redux";
import penderMiddleware from 'redux-pender';
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from "./reducer";

<<<<<<< HEAD
=======

>>>>>>> 8961fbfad117639409735673a72efe8e15a342e5
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(penderMiddleware()))
);
export default store;
<<<<<<< HEAD







=======
>>>>>>> 8961fbfad117639409735673a72efe8e15a342e5
