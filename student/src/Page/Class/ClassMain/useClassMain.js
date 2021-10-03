import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useAssignments, useTeams } from "../../../components/Use";
import { getDataFromStorage } from "../../../utils/storage";
import { useLoading, CTLoading } from "../../../components";
import { DateChange } from "../../../utils/dateChange";

const useClassMain = () => {
  const history = useHistory();
  const studentInfo = getDataFromStorage();

  const { code } = useParams();
  const { loading, setLoading } = useLoading(true);

  const { assignmentByTeamList, getAssignmentsByTeam } = useAssignments();
  const { teamList, teamMemberList } = useTeams();

  const clickHandler = (assignmentId) => {
    history.push(`/student/class/${code}/main/assignment/${assignmentId}`);
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        await teamMemberList(`classCode=${code}&memberId=${studentInfo.id}`);
        await getAssignmentsByTeam(teamList.teamId);
      } catch (e) {
        alert(e);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [
    code,
    getAssignmentsByTeam,
    setLoading,
    studentInfo.id,
    teamList.teamId,
    teamMemberList,
  ]);

  return {
    assignmentByTeamList,
    loading,
    CTLoading,
    teamList,
    clickHandler,
    DateChange,
  };
};

export default useClassMain;
