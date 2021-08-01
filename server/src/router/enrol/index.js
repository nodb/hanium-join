import Router from "@koa/router";
import * as enrol from "./enrol";

const router = new Router();

// 수강 신청 목록
router.get("/:classId", ...enrol.readSubList);

// 수강생 목록
router.get("/:classId", ...enrol.readCompleteList);

// 수강 신청
router.post("/", ...enrol.create);

// router.post("/", ...enrol.create);

export default router;
