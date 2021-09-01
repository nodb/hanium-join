import { applyMiddleware, createStore } from "redux";
import penderMiddleware from 'redux-pender';
import reducer from "./reducer";
import {composeWithDevTools} from 'redux-devtools-extension';



const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(penderMiddleware()))
);

export default store;
