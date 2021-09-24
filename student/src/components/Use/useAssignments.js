import * as reducer from "../../store/reducer/assignments";
import {
  useActions,
  useShallowEqualSelector,
  useShallowEqualSelectorToJS,
} from "./components";

const useAssignments = () => {
  const assignmentsList = useShallowEqualSelectorToJS((state) =>
    state.assignments.get("list")
  );

  const assignmentOne = useShallowEqualSelectorToJS((state) =>
    state.assignments.get("assignment")
  );

  const assignmentTeamOne = useShallowEqualSelectorToJS((state) =>
    state.assignments.get("assignmentTeam")
  );

  const actions = useActions(reducer);

  return {
    assignmentsList,
    assignmentOne,
    assignmentTeamOne,

    listAllByClassCode: actions.listAllByClassCode,
    getAssignment: actions.getAssignment,
    getAssignmentTeam: actions.getAssignmentTeam,

    createAssignmentsApi: reducer.createAssignmentsApi,
    updateAssignmentsApi: reducer.updateAssignmentsApi,
    deleteAssignmentsApi: reducer.deleteAssignmentsApi,
    submitAssignmentsApi: reducer.submitAssignmentsApi,
  };
};

export default useAssignments;
