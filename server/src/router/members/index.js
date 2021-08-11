import Router from "@koa/router";
import * as members from "./members";

const router = new Router();

// 생성
<<<<<<< HEAD
router.post("/", ...members.create);
=======
router.post("/register", ...members.create);
>>>>>>> jaeyoung

// 리스트 조회
router.get("/", ...members.readAll);

// 상세 조회
<<<<<<< HEAD
router.get("/:id", ...members.read);

// 수정
router.put("/:email", ...members.update);

// 삭제
router.delete("/:email", ...members.remove);
=======
router.get("/:id", ...members.readId);

// 상세 조회2
router.get("/:email", ...members.readEmail);

// 회원 정보 수정
router.put("/:id", ...members.update);

// 삭제
router.delete("/:id", ...members.remove);
>>>>>>> jaeyoung

export default router;
