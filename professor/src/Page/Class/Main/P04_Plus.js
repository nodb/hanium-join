import React from "react";
import styled from "styled-components";

const PlusIcon = styled.div`
  width: 50px;
  height: 50px;
  cursor: pointer;
  margin-left: 1300px;
`;

function P04_Plus({ open }) {
  return (
    <PlusIcon onClick={open}>
      <img
        src="https://image.flaticon.com/icons/png/512/181/181672.png"
        width="100%"
        height="100%"
        alt="plusIcon"
      ></img>
    </PlusIcon>
  );
}

export default P04_Plus;
