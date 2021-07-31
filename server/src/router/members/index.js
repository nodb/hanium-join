import Router from "@koa/router";
import * as members from "./members";

const router = new Router();


// router.get("/:id", members.get);
// router.post("/", members.post, members.responseMiddleware);
// router.put("/:id", members.put, members.responseMiddleware);
// router.delete("/:id", members.remove);

router.post("/", ...members.create);

export default router;
