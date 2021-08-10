import React from "react";
import { Table } from "reactstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";

const IntroText = styled.div`
  padding-left: 30px;
  font-size: 18px;
  color: gray;
`;

const list = [
  {
    id: 1,
    name: "시스템 프로그래밍",
    content: "최종 과제 제출",
    submit: true,
    createdAt: "2021-06-04",
  },

  {
    id: 2,
    name: "컴퓨터 네트워크",
    content: "C 소켓 프로그래밍",
    submit: true,
    createdAt: "2021-06-01",
  },

  {
    id: 3,
    name: "소프트웨어 공학",
    content: "Sprint 5",
    submit: false,
    createdAt: "2021-06-01",
  },
];

const MyAssignment = (props) => {
  return (
    <>
      <IntroText>내용을 클릭하면 해당페이지로 이동합니다.</IntroText> <br />
      <Table size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>과목</th>
            <th>내용</th>
            <th>제출여부</th>
            <th>등록일</th>
          </tr>
        </thead>
        <tbody>
          {list &&
            list.map((item) => {
              return (
                <tr>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>
                    <Link
                      to="/professor/class/assignment"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {item.content}
                    </Link>
                  </td>
                  <td>{item.submit ? "제출" : "미제출"}</td>
                  <td>{item.createdAt}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
};

export default MyAssignment;
