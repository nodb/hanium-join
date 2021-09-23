import { fromJS } from "immutable";
import * as reducer from "../../store/reducer/teams";
import { useActions, useShallowEqualSelectorToJS } from "./components";

const useTeams = () => {
  const teamList = useShallowEqualSelectorToJS((state) =>
    state.teams.get("list")
  );

  const actions = useActions(reducer);

  return {
    teamList,

    listAllTeams: actions.listAllTeams,

    insertStudentsApi: reducer.insertStudentsApi,
    deleteStudentsApi: reducer.deleteStudentsApi,
    deleteTeamApi: reducer.deleteTeamApi,
    createTeamApi: reducer.createTeamApi,
  };
};
export default useTeams;
