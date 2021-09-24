import React, { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";
import { Link, useHistory, useParams } from "react-router-dom";
import { useAssignments } from "../../../components/Use";
import { endDateChange, DateChange } from "../../../utils/dateChange";
import styled from "styled-components";

const Box = styled.div`
  width: 80%;
  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
    padding-bottom: 10px;
    text-align: center;
  }
  button {
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    text-align: center;
    background-color: #ffffff;
    border-color: #426589;
    color: #426589;
    width: 75px;
    height: 30px;
  }
`;

const Assignment = styled.div`
  thead th {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 20px;
    padding-bottom: 10px;
    text-align: center;
    background-color: #426589;
  }

  tbody th {
    font-family: Roboto;
    font-style: normal;
    font-weight: 550;
    font-size: 17px;
    line-height: 20px;
    padding-bottom: 15px;
    padding-top: 15px;
    text-align: center;
  }

  td {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 20px;
    padding-top: 15px;
    color: #000000;
    text-align: center;
  }
`;

const assignmentList = () => {
  const history = useHistory();
  const { code } = useParams();
  const { assignmentsList, listAllByClassCode } = useAssignments();

  useEffect(() => {
    const fetch = async () => {
      try {
        await listAllByClassCode(code);
      } catch (e) {
        alert(e);
      }
    };
    fetch();
  }, []);
  
  const handler = async (id) => {
    try {
      history.push(`/professor/class/${code}/assignment/${id}`);
    } catch (e) {
      alert(e);
    }
  };

  return (
    <Box>
      <div className="d-flex justify-content-between pt-3 pb-2 mb-3">
        <p style={{ fontWeight: "bold" }}>등록된 과제 확인</p>
        <Link to={`/professor/class/${code}/addAssignment`}>
          <button size="sm">추가</button>
        </Link>
      </div>
      <Assignment>
        <Table size="sm">
          <thead>
            <tr style={{ color: "white" }}>
              <th>번호</th>
              <th>과제명</th>
              <th>진행</th>
              <th>배점</th>
              <th>마감일</th>
            </tr>
          </thead>
          <tbody>
            {assignmentsList.results.map((assignment, index) => {
              return (
                <tr>
                  <th>{index + 1}</th>
                  <th onClick={() => handler(assignment.id)}>
                    {assignment.name}
                  </th>
                  <th>{assignment.progress === 1 ? "진행 중" : "마감"}</th>
                  <th>{assignment.point}</th>
                  <th>{endDateChange(assignment.endDate)}</th>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Assignment>
    </Box>
  );
};

export default assignmentList;
