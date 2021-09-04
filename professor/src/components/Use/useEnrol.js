import * as reducer from "../../store/reducer/enrol";
import {
  useActions,
  useShallowEqualSelectorToJS,
  useShallowEqualSelector,
} from "./components";

const useEnrol = () => {
    const studentList = useShallowEqualSelectorToJS((state)=>
    state.enrols.get("list")
    );

    const actions = useActions(reducer);

    return {
        studentList,

        getStudents: actions.getStudents,
    }
}

export default useEnrol