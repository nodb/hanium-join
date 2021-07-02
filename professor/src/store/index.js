import { createStore } from "redux";
import reducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  // 초기 test 값
  teams: [
    {
      id: 1,
      name: "Team1",
      members: [
        {
          id: 1,
          name: "조재영",
          department: "컴퓨터공학과",
        },
        {
          id: 2,
          name: "마경미",
          department: "컴퓨터공학과",
        },
        {
          id: 3,
          name: "오예진",
          department: "컴퓨터공학과",
        },
        {
          id: 4,
          name: "엄유상",
          department: "컴퓨터공학과",
        },
      ],
    },
  ],
};

const store = createStore(reducer, initialState, composeWithDevTools());

export default store;
