import * as reducer from "../../store/reducer/member";
import { useShallowEqualSelectorToJS } from "./components";

const useMember = () => {
  const memberList = useShallowEqualSelectorToJS((state) =>
    state.member.get("list")
  );

  const actions = useActions(reducer);

  return {
    memberList,
    listAllMember: actions.listAllMember,
  };
};
