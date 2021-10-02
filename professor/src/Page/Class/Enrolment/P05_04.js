import React from "react";

import StudentList from "./P05_StudentList";
import Enrolment from "./P05_Enrolment";

import useP05_04 from "./useP05_04";

const P05_04 = () => {
  const {
    loading,
    studentList,
    enrolList,
    removeStudentHandler,
    AcceptHandler,
    RefuseHandler,
    CTLoading,
  } = useP05_04();
  return loading ? (
    <CTLoading />
  ) : (
    <div>
      <StudentList
        studentList={studentList}
        removeHandler={removeStudentHandler}
      />
      <Enrolment
        enrolList={enrolList}
        AcceptHandler={AcceptHandler}
        RefuseHandler={RefuseHandler}
      />
    </div>
  );
};

export default P05_04;
