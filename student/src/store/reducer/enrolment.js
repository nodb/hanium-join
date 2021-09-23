import { createAction, handleActions } from "redux-actions";
import { pender } from "redux-pender";
import { Map, List, fromJS } from "immutable";
import { EnrolmentApi } from "../../remote";

export const LISTALL_CLASSES = "classes/LISTALL";

export const createEnrolApi = EnrolmentApi.create;

const initialState = Map({
  list: Map({
    count: 0,
    results: List([]),
  }),
});

export default handleActions(
  {
    ...pender({
      type: LISTALL_CLASSES,
      onSuccess: (state, action) => {
        return state.set("list", fromJS(action.payload.data));
      },
    }),
  },
  initialState
);
