import React from "react";
import styled from "styled-components";

const Text = styled.div`
  font-family: "Nanum Gothic", sans-serif;
  font-size: 20px;
  font-weight: 900;
  width: 40px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const AssignmentBox = styled.div`
  display: flex;
  width: 1032px;
  height: 80px;
  margin-bottom: 20px;
  background-color: #e5e5e5;
  padding: 25px 30px 25px 30px;
  justify-content: space-between;
  cursor: pointer;
`;

const AssignmentName = styled.div`
  font-family: "Nanum Gothic", sans-serif;
  font-size: 18px;
  font-weight: 400;
`;

const RightBox = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
`;

const Page = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;
const Button = styled.button`
  background-color: transparent;
  border-color: transparent;
`;

const NoAssign = styled.div`
  text-align: center;
  margin-top: 70px;
  div{
    margin-top: 30px;
    font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 18px;
  }
`

const AssignmentDetail = ({ assignment, clickHandler, DateChange }) => {
  return (
    <AssignmentBox
      onClick={() => {
        clickHandler(assignment.id);
      }}
    >
      <AssignmentName>{assignment.name}</AssignmentName>
      <RightBox>
        <div>{DateChange(assignment.endDate)}</div>
        <div>제출</div>
      </RightBox>
    </AssignmentBox>
  );
};

const S05_Assignment = ({ List, DateChange, clickHandler, setData, array }) => {
  return (
    <div>
      <Text>과제</Text>
      {List.count === 0 ? (<>
      <NoAssign>
        <img src={require("../../../images/no_assignments.png").default} alt="과제없음 이미지" />
        <div>
          아직 과제가 없어요!
        </div>
        </NoAssign>
      </>) : (
        <>
        {List.results.map((item) => (
          <AssignmentDetail
            key={item.id}
            assignment={item}
            DateChange={DateChange}
            clickHandler={clickHandler}
          />
        ))}
        <Page>
          {array.map((idx) => {
            return (
              <Button
                onClick={() => {
                  setData(idx);
                }}
              >
                {idx}
              </Button>
            );
          })}
        </Page>
        </>
      )}
      
    </div>
  );
};

export default S05_Assignment;
