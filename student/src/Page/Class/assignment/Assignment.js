import React from "react";
import imgfile from "../../../images/assign_example.PNG";
import { Switch, Route, Redirect, Link } from "react-router-dom";

export const Assignment = () => {
  const count = 0;

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
        <h1 className="h4">과제명</h1>
      </div>
      <div
        class="textviewer"
        style={{
          height: "200px",
          width: "600px",
          border: "solid 1px",
          textAlign: "center",
          lineHeight: "200px",
        }}
      >
        <div>과제 설명 예시 칸</div>
      </div>
      <img src={imgfile} />
      <div for="comment" style={{ fontSize: "14px" }}>
        댓글 {count}개
      </div>
      <div class="d-flex pd-4">
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          style={{ width: "520px", marginRight: "20px" }}
        />
        <button type="submit" class="btn btn-secondary">
          확인
        </button>
      </div>
      <div class="form-inline pb-4 mt-3">
        <Link
<<<<<<< HEAD
          to="/class/main/assignment/submit"
=======
          to="/student/class/main/assignment/submit"
>>>>>>> 3eb3fac170c5980ada387928f12e91ed9e75d89d
          style={{ textDecoration: "none", color: "black" }}
        >
          과제 제출하러 가기
        </Link>
      </div>
      <tr>
<<<<<<< HEAD
        <Link to="/class/main">
=======
        <Link to="/student/class/main">
>>>>>>> 3eb3fac170c5980ada387928f12e91ed9e75d89d
          <button
            href="#"
            class="btn btn-secondary btn-sm"
            style={{ fontSize: "12px" }}
          >
            목록
          </button>
        </Link>
      </tr>
    </>
  );
};

export default Assignment;
