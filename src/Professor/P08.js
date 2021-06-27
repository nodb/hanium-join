import React from "react";
import { Button, Table } from "reactstrap";

export const P08 = ({ list }) => {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
        <h4>등록된 과제 확인</h4>
        <Button class="ms-auto" size="sm">
          과제 추가
        </Button>
      </div>
      <Table size="sm">
        <thead style={{ textAlign: "center" }}>
          <tr>
            <th>번호</th>
            <th>과제명</th>
            <th>진행</th>
            <th>배점</th>
            <th>마감일</th>
          </tr>
        </thead>
        <tbody style={{ textAlign: "center" }}>
          {list &&
            list.map((assignment) => (
              <tr>
                <th scope="row">{assignment.id}</th>
                <td>{assignment.name}</td>
                <td>{assignment.progress}</td>
                <td>{assignment.points}</td>
                <td>{assignment.deadline}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default P08;
