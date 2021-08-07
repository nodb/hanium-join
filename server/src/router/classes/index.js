import Router from "@koa/router";
import * as classes from "./classes";

const router = new Router();

// 교수님 강의 조회
router.get("/professor/:memberId", ...classes.readProfessorAll);

// 학생 수업 조회
router.get("/student/:memberId", ...classes.readStudentAll);

// 강의 상세 조회(학생)
router.get("/student", ...classes.readClassStudent);

// 강의 상세 조회(교수)
router.get("/professor", ...classes.readClassProfessor);

// 강의 생성
router.post("/", ...classes.create);

export default router;
