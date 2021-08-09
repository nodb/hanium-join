import Router from "@koa/router";
import * as classes from "./classes";

const router = new Router();

// 강의 조회
router.get("/", ...classes.readAll);

// // 강의 상세 조회
// router.get("/:classCode", ...classes.readClass);

// 강의 생성
router.post("/", ...classes.create);

export default router;
