import { combineReducers } from "redux";
import { penderReducer } from "redux-pender";
import memberReducer from "./member";
import classesReducer from "./classes";
import assignmentsReducer from "./assignments";
import commentsReducer from "./comments";
import enrolsReducer from "./enrol";
import teamsReducer from "./teams";

export default combineReducers({
  pender: penderReducer,
  member: memberReducer,
  classes: classesReducer,
  assignments: assignmentsReducer,
  comments: commentsReducer,
  enrols: enrolsReducer,
  teams: teamsReducer,
});
