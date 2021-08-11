import Router from "@koa/router";
import * as discuss from "./discuss";

const router = new Router();

// 토론 댓글 생성
router.post("/", ...discuss.create);

// 팀 전체 조회
router.get("/:classCode", ...discuss.readAll);

export default router;
