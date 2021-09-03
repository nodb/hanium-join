import * as reducer from "../../store/reducer/teams";
import { useActions, useShallowEqualSelectorToJS } from "./components";

const useTeams = () => {
  const teamList = useShallowEqualSelectorToJS((state) =>
    state.teams.get("list")
  );
  const actions = useActions(reducer);

  return {
    teamList,

    teamMemberList: actions.teamMemberList,
  };
};

export default useTeams;
