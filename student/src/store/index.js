import { createStore } from "redux";
import reducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  // 초기 test 값
<<<<<<< HEAD
  test: {
    name: "join",
  },
=======
  
>>>>>>> 3eb3fac170c5980ada387928f12e91ed9e75d89d
};

const store = createStore(reducer, initialState, composeWithDevTools());

export default store;
