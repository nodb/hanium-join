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

  const actions = useActions(reducer);

  return {
    assignmentsList,
    assignmentOne,

    listAllByClassCode: actions.listAllByClassCode,
    getAssignment: actions.getAssignment,

    createAssignmentsApi: reducer.createAssignmentsApi,
    updateAssignmentsApi: reducer.updateAssignmentsApi,
    deleteAssignmentsApi: reducer.deleteAssignmentsApi,
    submitAssignmentsApi: reducer.submitAssignmentsApi,
  };
};

export default useAssignments;
