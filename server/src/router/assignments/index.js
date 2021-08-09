import Router from "@koa/router";
import * as assignments from "./assignments";

const router = new Router();

// 생성
router.post("/", ...assignments.create);

// 전체 과제 조회
router.get("/", ...assignments.readAll);

// 상세 과제 조회
router.get("/:id", ...assignments.readId);

// 수정
router.put("/:id", ...assignments.update);

// 삭제
router.delete("/:id", ...assignments.remove);

export default router;
