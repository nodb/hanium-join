import React, { useEffect } from "react";
import { Button, Table } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import { useAssignments } from "../../../components/Use";
import { DateChange } from "../../../utils/dateChange";
import { getDataFromStorage, saveDataToStorage } from "../../../utils/storage";

const assignmentList = () => {
  const history = useHistory();
  const { assignmentsList, listAllByClassCode } = useAssignments();

  useEffect(() => {
    const fetch = async () => {
      try {
        await listAllByClassCode();
      } catch (e) {
        alert(e);
      }
    };
    fetch();
  }, []);

  const handler = async (id) => {
    try {
      history.push(`/professor/class/assignment/${id}`);
    } catch (e) {
      alert(e);
    }
  };

  const count = 1;

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
        <p>등록된 과제 확인</p>
        <Link to="/professor/class/addAssignment">
          <Button class="ms-auto" size="sm">
            추가
          </Button>
        </Link>
      </div>
      <Table size="sm">
        <thead style={{ textAlign: "center", background: "#426589" }}>
          <tr style={{ color: "white" }}>
            <th>번호</th>
            <th>과제명</th>
            <th>진행</th>
            <th>배점</th>
            <th>마감일</th>
          </tr>
        </thead>
        <tbody style={{ textAlign: "center" }}>
          {assignmentsList.results.map((assignment) => {
            return (
              <tr style={{ verticalAlign: "middle", fontWeight: "bold" }}>
                <th scope="row" style={{ padding: "12px 0px" }}>
                  {count}
                </th>
                <td onClick={() => handler(assignment.id)}>
                  {assignment.name}
                </td>
                <td>{assignment.progress === 1 ? "진행 중" : "마감"}</td>
                <td>{assignment.point}</td>
                <td>{DateChange(assignment.endDate)}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default assignmentList;
