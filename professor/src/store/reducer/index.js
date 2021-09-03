import { combineReducers } from "redux";
import { penderReducer } from "redux-pender";
import memberReducer from "./member";
<<<<<<< HEAD
import classesReducer from "./classes";
import assignmentsReducer from "./assignments";
import commentsReducer from "./comments";
=======
import classessReducer from "./classes";
>>>>>>> 8961fbfad117639409735673a72efe8e15a342e5

export default combineReducers({
  pender: penderReducer,
  member: memberReducer,
<<<<<<< HEAD
  classes: classesReducer,
  assignments: assignmentsReducer,
  comments: commentsReducer,
=======
  classes: classessReducer,
>>>>>>> 8961fbfad117639409735673a72efe8e15a342e5
});
