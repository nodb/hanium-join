import { createAction, handleActions } from "redux-actions";
import { pender } from "redux-pender";
import { Map, List, fromJS } from "immutable";
import { MemberApi } from "../../remote";

export const LISTALL_MEMBER = "member/LISTALL";

//createAction(type,payloadCreator)
export const listAllMember = createAction(LISTALL_MEMBER, MemberApi.listAll);

const initialState = {
  list: Map({
    count: 0,
    result: List([]),
  }),
};
//=> immutable

export default handleActions(
  {
    ...pender({
      type: LISTALL_MEMBER,
      onSuccess: (state, action) => {
        const data = action.payload.data;

        return state.state("list", fromJS(data));
        //list에 total만 변경시키는 경우 return state.setIn(["list","total"],data.total);
        //.setIn(["list","result"],data.result); => 이거까지 합치면 기존 return문과 같음

        //initalState에서 map으로 쓴 경우 fromJS(data)라고 써야한다. map을 쓰지 않은 경우 그냥 data라고 작성
      },
    }),
  },
  initialState
); //==reducer
