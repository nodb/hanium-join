import { combineReducers } from "redux";
import { penderReducer } from "redux-pender";
import memberReducer from "./member";
import classesReducer from "./classes";
import assignmentsReducer from "./assignments";
import commentsReducer from "./comments";
import teamsReducer from "./teams";
import chatsReducer from "./chats";

export default combineReducers({
  pender: penderReducer,
  member: memberReducer,
  classes: classesReducer,
  assignments: assignmentsReducer,
  comments: commentsReducer,
  teams: teamsReducer,
  chats: chatsReducer,
});
