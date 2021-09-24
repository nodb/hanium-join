import * as reducer from "../../store/reducer/report";
import {
  useActions,
  useShallowEqualSelector,
  useShallowEqualSelectorToJS,
} from "./components";

const useReport = () => {
  const reportList = useShallowEqualSelectorToJS((state) =>
    state.report.get("list")
  );

  const actions = useActions(reducer);

  return {
    reportList, 
  
    listAllByProf: actions.listAllByProf,
  };
};

export default useReport;
