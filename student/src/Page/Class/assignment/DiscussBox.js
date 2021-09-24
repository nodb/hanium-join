import React from "react";
import styled from "styled-components";
import { DateChange3 } from "../../../utils/dateChange";
import { useDiscuss } from "../../../components/Use";

const Box = styled.div`
  width: 1040px;
  height: 80px;
  border-bottom: 1px solid #7c7979;
  padding-top: 10px;
  margin: 0px 0px 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const Name = styled.div`
  width: 500px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 16px;
  color: #7c7979;
  margin-bottom: 10px;
`;

const Contents = styled.div`
  width: 900px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 16px;
`;

const Delete = styled.button`
  width: 50px;
  border: none;
  color: #ef8f88;
  background: none;
  font-family: Roboto;
  font-weight: bold;
  font-size: 16px;
`;

const DiscussBox = ({ data, id }) => {
  const { listAllDiscuss, removeDiscussApi } = useDiscuss();

  const DeleteHandler = async (_id) => {
    try {
      await removeDiscussApi(_id);
      await listAllDiscuss("1", id);
    } catch (e) {
      alert(e);
    }
  };
  return (
    <Box>
      <div>
        <Name>
          {data.name}&nbsp;&nbsp;({DateChange3(data.createdAt)})
        </Name>
        <Contents>{data.content}</Contents>
      </div>
      <Delete onClick={() => DeleteHandler(data.id)}>삭제</Delete>
    </Box>
  );
};

export default DiscussBox;
