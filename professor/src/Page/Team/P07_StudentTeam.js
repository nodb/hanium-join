import React from "react";
import styled from "styled-components";

const Box = styled.div`
  background-color: #d8d8d8;
  width: 400px;
  height: 500px;
  overflow: scroll;
  flex-wrap: wrap;
  padding: 30px 50px 30px;
  position: relative;
`;

const RelatvieBox = styled.div`
  width: 200px;
  position: relative;
  right: 135px;
  bottom: 280px;
`;

function P07_StudnentList() {
  return (
    <>
      <Box></Box>
      <RelatvieBox>
        <button style={{ backgroundColor: "white" }}>
          <img
            src={`../BGImg/leftArrow.png`}
            alt="leftArrow"
            width="50px"
            height="30px"
          ></img>
        </button>
      </RelatvieBox>
    </>
  );
}

export default P07_StudnentList;
