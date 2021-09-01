import * as reducer from "../../store/reducer/member";
import { useActions, useShallowEqualSelectorToJS } from "./components";

const useMember = () => {
  const memberList = useShallowEqualSelectorToJS((state) =>
    state.member.get("list")
  );
  const actions = useActions(reducer);

  return {
    memberList,

    listAllMember: actions.listAllMember,

    signupApi: reducer.signupApi,
    loginApi: reducer.loginApi,
  };
};

export default useMember;
