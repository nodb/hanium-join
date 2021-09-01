import {createAction, handleActions } from "redux-actions";
//type, payload를 가진 action을 만들기 (액션 정의)= createAction
//여러 액션을 모아서 처리 (액션 처리)= handleActions
import {pender} from "redux-pender";    //성공만 고려
import {Map, List, formJS } from "immutable"; //객체 = Map, 배열 = list, fromJS = immutable의 list 객체로 바꾸기 위함. (Map의 경우 사용해야함)
import {MemberApi} from "../../remote";

// 액션 타입 정의
export const LISTALL_MEMBER="member/LISTALL";
// 액션 정의
export const listAllMEmber = createAction(
    LISTALL_MEMBER,    //action-type
    MemberApi.listAll   //action-payload
);

// 서버에서 바로 가져옴  ~~Api : reducer에서 매핑
export const signupApi = MemberApi.signup;
export const loginApi = MemberApi.login;

const initialState = Map({ 
    list: Map({
        count: 0,
        results: List()
    })
});

// 리듀서 만들기
export default handleActions({
  ...pender({
      type: LISTALL_MEMBER,
    onSuccess: (state, action) => {
        const data = action.payload.data;

        //spread 연산자를 까먹는 것을 막기 위한 것과 같음. -> immutable 사용
        return state.setIn(["list", "total"], action.payload.data) //list 안의 total을 action.payload.data.total로 변경
        // return state.set("list", action.payload.data) //list를 action.payload.data로 변경
    }
  })
},initialState
) // {처리할 것 : 데이터 조작},{초기상태}