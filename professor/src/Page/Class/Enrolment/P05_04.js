import React, { useEffect } from "react";
import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";

import StudentList from "./P05_StudentList";
import Enrolment from "./P05_Enrolment";
import { getDataFromStorage } from "../../../utils/storage";
import { useEnrolment } from "../../../components/Use";

const Box = styled.div`
  width: 1100px;
  height: 300px;
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
  border: 2px solid ${(props) => props.color};
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const Box2 = styled.div`
  width: 1100px;
  height: 300px;
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
  padding: 30px 30px 30px;
  border: 2px solid ${(props) => props.color};
  margin-bottom: 20px;
`;

const Text = styled.div`
  font-family: "Nanum Gothic", sans-serif;
  font-size: 20px;
  font-weight: 900;
  width: 150px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 20px;
`;

const CopyButton = styled.button`
  background: #426589;
  color: white;
  border: none;
  width: 120px;
  height: 30px;
`;

const P05_04 = () => {
  const { enrolList, enrolListAll, studentList, studentListAll } =
    useEnrolment();

  const code = getDataFromStorage("code");

  useEffect(() => {
    const fetch = async () => {
      try {
        await enrolListAll(code);
      } catch (e) {
        alert(e);
      }

      try {
        await studentListAll(code);
      } catch (e) {
        alert(e);
      }
    };

    fetch();
  }, []);

  return (
    <div>
      <Text>수강생 목록</Text>
      {studentList.count === 0 && (
        <Box color="#426589">
          <Img src="https://cdn-icons-png.flaticon.com/512/1387/1387940.png"></Img>
          <div>
            <p>수업에 학생들을 초대하세요.</p>
            <CopyToClipboard text={code}>
              <CopyButton>코드 복사하기</CopyButton>
            </CopyToClipboard>
          </div>
        </Box>
      )}
      {studentList.count > 0 && (
        <Box2 color="#426589">
          {studentList.results.map((item) => {
            return <StudentList student={item}></StudentList>;
          })}
        </Box2>
      )}
      <Text>수강신청 목록</Text>
      {enrolList.count === 0 && (
        <Box color="#EF8F88">
          <p>새로운 수강 신청이 없습니다.</p>
        </Box>
      )}
      {enrolList.count > 0 && (
        <Box2 color="#EF8F88">
          {enrolList.results.map((item) => {
            return <Enrolment student={item}></Enrolment>;
          })}
        </Box2>
      )}
    </div>
  );
};

export default P05_04;
