import Router from "@koa/router";
import * as assignments from "./assignments";
import * as assignmentTeam from "./assignmentTeam";

const router = new Router();

// 생성
router.post("/", ...assignments.create);

// 전체 과제 조회
router.get("/", ...assignments.readAll);

// memberId별 조회
router.get("/byStudent/:id", ...assignments.readByStudent);

router.get("/byProfessor/:id", ...assignments.readByProfessor);

// assignmentId&teamId 조회
// router.get("/", ...assignments.readByClass);

// teamId별 조회
router.get("/byTeam/:id", ...assignments.readByTeam);

// 상세 과제 조회
router.get("/:id", ...assignments.readId);

// 수정
router.put("/:id", ...assignments.update);

// 삭제
router.delete("/:id", ...assignments.remove);

// 제출
router.post("/submit/:id", ...assignmentTeam.submit);

// 제출 확인
router.get("/team/:id", ...assignmentTeam.read);

export default router;
