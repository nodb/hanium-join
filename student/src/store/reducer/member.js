import { createAction, handleActions } from "redux-actions";
import { pender } from "redux-pender";
import { Map, List, fromJS } from "immutable";
import { MemberApi } from "../../remote";

export const LISTALL_MEMBER = "member/LISTALL";

export const listAllMember = createAction(LISTALL_MEMBER, MemberApi.listAll);

export const signupApi = MemberApi.signup;
export const loginApi = MemberApi.login;

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
        return state.set("list", fromJS(action.payload.data));
      },
    }),
  },
  initialState
);
