import React from "react";
import Navbar from "./Navbar";
import imgfile from "./images/assign_example.PNG";

export const LayoutType2 = () => {
  const count = 0;

  return (
    <div style={{display : "flex",
    flexDirection : "column" }}>
      <div className="row">
        <Navbar />
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
            <h1 className="h4">과제명</h1>
          </div>
          <div class="textviewer" style={{height:"200px", width:"600px", border:"solid 1px", textAlign:"center", lineHeight:"200px"}}>
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
              style={{width:"520px", marginRight: "20px"}}
            />
            <button type="submit" class="btn btn-secondary">
              확인
            </button>
          </div>
          <div class="form-inline pb-4 mt-3">
            <a href="#">과제 제출하러 가기</a>
          </div>
          <tr>
            <button
              href="#"
              class="btn btn-secondary btn-sm"
              style={{ fontSize: "12px" }}
            >
              목록
            </button>
          </tr>
        </main>
      </div>
    </div>
  );
};

export default LayoutType2;
