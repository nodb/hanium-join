import React from 'react';
import { Table } from 'reactstrap';
import styled from 'styled-components'

const IntroText = styled.div`
    padding-left: 30px;
    font-size: 18px;
    color: gray;
`

const MyAssignment = (props) => {
  return (
    <>
    <IntroText>
    내용을 클릭하면 해당페이지로 이동합니다.    
   </IntroText>  <br />
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
        <tr>
          <th scope="row">1</th>
          <td>시스템프로그래밍</td>
          <td>최종 과제 제출</td>
          <td>제출</td>
          <td>2021-06-04</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>컴퓨터네트워크</td>
          <td>C 소켓 프로그래밍</td>
          <td>제출</td>
          <td>2021-06-01</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>소프트웨어공학</td>
          <td>Spint 5</td>
          <td>미제출</td>
          <td>2021-06-01</td>
        </tr>
    
      </tbody>
    </Table>
    </>
  );
}

export default MyAssignment;