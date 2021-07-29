import Router from "@koa/router";
import * as members from "./members";

const router = new Router();

// 미들웨어를 나열하기 보다는 다음과 같이 배열로 표현하자.
// const post = [1, 2, 3, 4];

// router.get("/:id", members.get);
// router.post("/", members.post, members.responseMiddleware);
// router.put("/:id", members.put, members.responseMiddleware);
// router.delete("/:id", members.remove);

router.post("/", ...members.create);

export default router;
