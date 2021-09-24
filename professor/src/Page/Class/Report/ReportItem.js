import React from "react";
import styled from "styled-components";

const Box = styled.div`
  border: 2px solid #426589;
  width: 80%;
  margin-bottom: 10px;
  padding: 10px;
  font-size: 18px;
`;

const ReportItem = ({item}) => {
    const { name, team, file } = item;
    return (
        <Box>
            <div>{name}</div>
            <div>{team}</div>
            <div>{file}</div>
        </Box>
    )
}

export default ReportItem
