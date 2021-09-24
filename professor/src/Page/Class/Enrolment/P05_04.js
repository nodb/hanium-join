import React, { useEffect } from "react";
import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";

import StudentList from "./P05_StudentList";
import Enrolment from "./P05_Enrolment";
import { useEnrolment } from "../../../components/Use";
import { CTLoading, useLoading } from "../../../components";

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

const P05_04 = ({ match }) => {
  const {
    enrolList,
    enrolListAll,
    studentList,
    studentListAll,
    removeStudentApi,
  } = useEnrolment();

  const { loading, setLoading } = useLoading(true);

  const code = match.params.code;

  const fetch = async () => {
    try {
      await enrolListAll(code);
      await studentListAll(code);
    } catch (e) {
      alert(e);
    } finally {
      await setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  const removeStudentHandler = async (student) => {
    try {
      const { id } = student;
      await setLoading(true);
      await removeStudentApi(`memberId=${id}&classCode=${code}`);
      fetch();
    } catch (e) {
      alert(e);
    }
  };

  return loading ? (
    <CTLoading />
  ) : (
    <div>
      <StudentList
        code={code}
        studentList={studentList}
        removeHandler={removeStudentHandler}
      />

      <Text>수강신청 목록</Text>
      <span>총 신청 : {enrolList.count}건</span>
      {enrolList.count === 0 && (
        <Box color="#EF8F88">
          <p>새로운 수강 신청이 없습니다.</p>
        </Box>
      )}
      {enrolList.count > 0 && (
        <Box2 color="#EF8F88">
          {enrolList.results.map((item) => {
            return <Enrolment code={code} student={item}></Enrolment>;
          })}
        </Box2>
      )}
    </div>
  );
};

export default P05_04;
