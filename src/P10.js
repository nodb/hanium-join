import React from "react";
import Navbar from "./Navbar";
import { Button } from "reactstrap";
import imgfile from "./images/assign_example.PNG";
export const P10 = ({ list }) => {
  const count = 0;

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="row">
        <Navbar />
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div class="mt-2">
            <Button size="sm" style={{ marginRight: "20px" }}>
              수정
            </Button>
            <Button size="sm">삭제</Button>
          </div>
          {/* {(assignment) => (
            <>
            <h4 class="mt-4">{assignment.name}</h4>
            <div style={{width:"600px"}}>
              과제 내용 예시. 우리는 자랑스러운 서울과학기술대학교 컴퓨터공학과 학생. 너무너무
              행복하다. 푸하하하하. 언젠가 세상을 정복하고 말테야. 과기대의 기술력은 세계 제일
            </div>
            <img src={assignment.img} class="mt-3"/>
            <div style={{fontSize:"14px"}} class="mt-3 mb-3">
              댓글  {count}개
            </div>
            <div>
              홍길동-등록된 과제에 대한 덧글
            </div>
            <hr/>
            <div>
              홍길동-등록된 과제에 대한 덧글
            </div>
            <hr/>
            <div>
              홍길동-등록된 과제에 대한 덧글
            </div>
            </>
          )
          } */}

          <h4 class="mt-4">과제명</h4>
          <div style={{ width: "600px" }}>
            과제 내용 예시. 우리는 자랑스러운 서울과학기술대학교 컴퓨터공학과
            학생. 너무너무 행복하다. 푸하하하하. 언젠가 세상을 정복하고 말테야.
            과기대의 기술력은 세계 제일
          </div>
          <img src={imgfile} class="mt-3" />
          <div style={{ fontSize: "14px" }} class="mt-3 mb-3">
            댓글 {count}개
          </div>
          <div>홍길동-등록된 과제에 대한 덧글</div>
          <hr style={{ width: "600px" }} />
          <div>홍길동-등록된 과제에 대한 덧글</div>
          <hr style={{ width: "600px" }} />
          <div>홍길동-등록된 과제에 대한 덧글</div>
          <Button size="sm" style={{ marginTop: "20px" }}>
            리포트 생성
          </Button>
        </main>
      </div>
    </div>
  );
};

export default P10;
