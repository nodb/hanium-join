import { createAction, handleActions } from "redux-actions";
import { pender } from "redux-pender";
import { Map, List, fromJS } from "immutable";
import { TeamsApi } from "../../remote";

export const LISTALL_TEAMS = "team/LISTALL";

export const teamMemberList = createAction(
  LISTALL_TEAMS,
  TeamsApi.teamMemberList
);

const initialState = Map({
  list: Map({
    count: 0,
    results: List([]),
  }),
});

export default handleActions(
  {
    ...pender({
      type: LISTALL_TEAMS,
      onSuccess: (state, action) => {
        return state.set("list", fromJS(action.payload.data));
      },
    }),
  },
  initialState
);
