import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useDiscuss } from "../../../components/Use";
import styled from "styled-components";
import { getDataFromStorage } from "../../../utils/storage";

import DiscussBox from "./DiscussBox";

const Box = styled.div`
  width: 1100px;
  height: 450px;
  overflow-y: scroll;
`;

const DiscussInput = styled.textarea`
  width: 950px;
  height: 50px;
  margin-right: 20px;
`;

const Submit = styled.button`
  border: none;
  background: #6f91b5;
  color: white;
  width: 100px;
  height: 50px;

  font-family: Roboto;
  font-weight: bold;
  font-size: 16px;
  line-height: 50px;
`;

const InputBox = styled.div`
  display: flex;
  margin-top: 30px;
`;

const ButtonBox = styled.div`
  width: 300px;
  display: flex;
  margin: 0 auto;
  padding-top: 30px;
`;

const Btn = styled.button`
  width: 80px;
  height: 30px;
  border: none;
  color: white;
  background: ${(props) => props.color};
  margin-right: 10px;
`;

const Discuss = () => {
  const { id } = useParams();
  const history = useHistory();
  const studentInfo = getDataFromStorage();

  const { createDiscussApi, DiscussList, listAllDiscuss } = useDiscuss();
  const [data, setData] = useState("");

  useEffect(() => {
    const fetch = async () => {
      try {
        await listAllDiscuss("1", id);
      } catch (e) {
        alert(e);
      }
    };

    fetch();
  }, []);

  const submitHandler = async () => {
    try {
      const body = {
        assignmentTeamId: 1,
        memberId: studentInfo.id,
        content: data,
      };
      await createDiscussApi(body);
      await listAllDiscuss("1", id);
    } catch (e) {
      alert(e);
    }
  };

  return (
    <>
      <div>
        <Box>
          {DiscussList.count === 0 && <p>글을 작성해주세요.</p>}
          {DiscussList.results.map((item) => {
            return <DiscussBox data={item} id={id} />;
          })}
        </Box>
        <InputBox>
          <DiscussInput
            value={data}
            onChange={(e) => setData(e.target.value)}
          ></DiscussInput>
          <Submit onClick={submitHandler}>전송</Submit>
        </InputBox>
      </div>
      <div>
        <ButtonBox>
          <Link to="/student/class/main/assignment">
            <Btn color="#EF8F88">취소</Btn>
          </Link>
          <Btn color="#6F91B5">제출</Btn>
        </ButtonBox>
      </div>
    </>
  );
};

export default Discuss;
