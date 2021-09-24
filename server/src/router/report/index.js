import Router from "@koa/router";
import * as report from "./report";

const router = new Router();

// 팀 전체 조회
router.get("/:classCode", ...report.readAll);

export default router;
