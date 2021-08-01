import Router from "@koa/router";
import * as members from "./members";

const router = new Router();

// 생성
router.post("/register", ...members.create);

// 리스트 조회
router.get("/", ...members.readAll);

// 상세 조회
router.get("/:id", ...members.readId);

// 상세 조회2
router.get("/:email", ...members.readEmail);

// 회원 정보 수정
router.put("/:id", ...members.update);

// 삭제
router.delete("/:id", ...members.remove);

export default router;
