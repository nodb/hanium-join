import React from "react";
import styled from "styled-components";

const Box = styled.div`
  background: #FFFFFF;
  border: 2px solid #EF8F88;
  box-sizing: border-box;
  width: 400px;
  height: 626px;
  overflow: scroll;
  flex-wrap: wrap;
  padding: 30px 50px 30px;
  position: relative;

`;

const RelatvieBox = styled.div`
  width: 200px;
  right: 135px;
`;

function P07_StudnentList() {
  return (
    <>
      <Box></Box>
      <RelatvieBox>
        <button style={{ backgroundColor: "white" }}>
          <img
            src={require("../../../images/toRight.png").default}
            alt="leftArrow"
            width="30px"
            height="30px"
          ></img>
        </button>
      </RelatvieBox>
    </>
  );
}

export default P07_StudnentList;
