import { createAction, handleActions } from "redux-actions";
import { pender } from "redux-pender";
import { Map, List, fromJS } from "immutable";
import { MemberApi } from "../../remote";

<<<<<<< HEAD
export const LISTALL_MEMBER = "member/LISTALL";

export const listAllMember = createAction(LISTALL_MEMBER, MemberApi.listAll);
=======

export const LISTALL_MEMBER = "member/LISTALL";


export const listAllMember = createAction(
    LISTALL_MEMBER,
    MemberApi.listAll
);
>>>>>>> 8961fbfad117639409735673a72efe8e15a342e5

export const signupApi = MemberApi.signup;
export const loginApi = MemberApi.login;

<<<<<<< HEAD
const initialState = Map({
  list: Map({
    count: 0,
    results: List([]),
  }),
});

export default handleActions(
  {
    ...pender({
      type: LISTALL_MEMBER,
      onSuccess: (state, action) => {
        const data = action.payload.data;

        return state.set("list", fromJS(action.payload.data));
      },
    }),
  },
  initialState
);
=======
const initialState = Map({ 
    list: Map({
        count: 0,
        results: List([])
    })
});



export default handleActions({
    ...pender({
        type: LISTALL_MEMBER, 
        onSuccess: (state, action) => { 
            const data = action.payload.data;

            return state.set("list", fromJS(action.payload.data));
            // return state.setIn(["list", "count"], action.payload.data.count)
            // .setIn(["list", "result"], fromJS(action.payload.data.result));
            // return {
            //     ...state,
            //     count: action.payload.data.count,
            // }
        }
    })

}, initialState)
>>>>>>> 8961fbfad117639409735673a72efe8e15a342e5
