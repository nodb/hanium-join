import Router from "@koa/router";
import * as reports from "./reports";

const router = new Router();

// 팀 전체 조회
router.get("/:memberId", ...reports.readAll);

export default router;
