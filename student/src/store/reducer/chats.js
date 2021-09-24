import { createAction, handleActions } from "redux-actions";
import { pender } from "redux-pender";
import { Map, List, fromJS } from "immutable";
import { ChatsApi } from "../../remote";

export const LISTALL_CHATS = "chats/LISTALL";
export const CONCAT_CHATS = "chats/CONCAT";

export const listAllChats = createAction(LISTALL_CHATS, ChatsApi.listChat);

export const concatChat = createAction(CONCAT_CHATS, (message) => message);

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
        console.log(action.payload.data);
        return state.set("list", fromJS(action.payload.data));
      },
    }),
    ...pender({
      type: CONCAT_CHATS,
      onSuccess: (state, action, {payload : message}) => {
        const { count, results } = action.payload.data;
        action.payload.data = {
          count : count+1,
          results:[
            ...results,
            message
          ]
        };
        return action.payload.data;
      }
    })
  },
  initialState
);
