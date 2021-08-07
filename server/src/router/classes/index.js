import Router from "@koa/router";
import * as classes from "./classes";

const router = new Router();

<<<<<<< HEAD
// 교수님 강의 조회
router.get("/professor/:memberId", ...classes.readProfessorAll);

// 학생 수업 조회
router.get("/student/:memberId", ...classes.readStudentAll);

// 강의 상세 조회
router.get("/:classCode", ...classes.readClass);
=======
// 강의 조회
router.get("/", ...classes.readAll);

// // 강의 상세 조회
// router.get("/:classId", ...classes.readClass);
>>>>>>> d7ff874ca155b3b381cd5faff0c33575b5ef79bb

// 강의 생성
router.post("/", ...classes.create);

export default router;
