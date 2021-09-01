import {combineReducers} from "redux";
import { penderReducer } from 'redux-pender';
import memberReducer from './member';


export default combineReducers({
    pender: penderReducer, //리듀서 적용
    member: memberReducer,
    
})
