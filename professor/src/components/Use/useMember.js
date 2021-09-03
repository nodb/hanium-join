import * as reducer from "../../store/reducer/member";
import { useActions, useShallowEqualSelectorToJS } from "./components";

const useMember = () => {
<<<<<<< HEAD
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
=======
    const memberList = useShallowEqualSelectorToJS((state) => state.member.get("list"));
    const actions = useActions(reducer);

    return {
        memberList,

        listAllMember: actions.listAllMember,

        signupApi: reducer.signupApi,
        loginApi: reducer.loginApi,
    }

}
>>>>>>> 8961fbfad117639409735673a72efe8e15a342e5

export default useMember;
