import * as reducer from "../../store/member";
import { useShallowEqualSelectorToJS } from "./components";

//(store/reducer/member.js에 있는) actions를 가져다 씀 
const useMember = () => {
    const memberList = useShallowEqualSelectorToJS((state) => state.member.get("list")) //state중에 member의 list를 가져와라
    const actions = useActions(reducer); //reducer에 해당하는 모든 action를 create -> action 정의 <<dispatch 대신>>

    return {
        memberList,

        listAllMember : actions.listAllMember,

        signupApi : reducer.signupApi,
        loginApi: reducer.loginApi
    }
}