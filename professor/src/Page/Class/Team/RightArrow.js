import React from "react"
import styled from "styled-components";

const Arrow = styled.div`
  margin-bottom: 25px;
  margin-left: 35px;
  width: 130px;
  height: 35px;
  background: #FFFFFF;
  border: 1px solid #000000;
  box-sizing: border-box;
  img{
    text-align: center;
    margin-left: 50px;
    width: 25px;
    height: 25px;
    margin-top: 4px;
  }
  cursor: pointer;
`

const RightArrow = () => {

    return (
        <Arrow style={{ backgroundColor: "white" }}>
        <img
          src={require("../../../images/toRight.png").default}
          alt="rightArrow"
        ></img>
      </Arrow>
    )
}

export default RightArrow;