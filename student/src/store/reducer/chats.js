import { createAction, handleActions } from "redux-actions";
import { pender } from "redux-pender";
import { Map, List, fromJS } from "immutable";
import { ChatsApi } from "../../remote";

export const LISTALL_CHATS = "chats/LISTALL";

export const listAllChats = createAction(
    LISTALL_CHATS,
  ChatsApi.listAll
);

export const createChatApi = ChatsApi.create;

const initialState = Map({
  list: Map({
    count: 0,
    results: List([]),
  }),
});

export default handleActions(
  {
    ...pender({
      type: LISTALL_CHATS,
      onSuccess: (state, action) => {
        return state.set("list", fromJS(action.payload.data));
      },
    }),
  },
  initialState
);
