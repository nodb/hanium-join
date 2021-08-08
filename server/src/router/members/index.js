import Router from "@koa/router";
import * as members from "./members";

const router = new Router();

// 생성
router.post("/", ...members.create);

// 리스트 조회
router.get("/", ...members.readAll);

// 상세 조회
router.get("/:id", ...members.read);

// 수정
router.put("/:email", ...members.update);

// 삭제
router.delete("/:email", ...members.remove);

export default router;
