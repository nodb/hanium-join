import { createAction, handleActions } from "redux-actions";
import { pender } from "redux-pender";
import { Map, List, fromJS } from "immutable";
import { ReportApi } from "../../remote";

export const LISTALL_REPORT = "report/LISTALL";

export const listAllByProf = createAction(
  LISTALL_REPORT,
  ReportApi.listAllByProf
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
      type: LISTALL_REPORT,
      onSuccess: (state, action) => {
        return state.set("list", fromJS(action.payload.data));
      },
    }),
  },
  initialState
);