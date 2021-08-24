import { combineReducers } from 'redux'
import { penderReducer } from 'redux-pender';
import memberReducer from "./member";
import classessReducer  from "./classes"

export default combineReducers({
    pender: penderReducer,
    member: memberReducer,
    classes: classessReducer,
})