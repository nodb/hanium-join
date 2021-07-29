import Router from "@koa/router";
import * as my from "./my";

const router = new Router({prefix:"/api/v1"});

router.get("/", my.get);
router.post("/:id", my.post, my.responseMiddleware);
router.delete("/:id", my.remove, my.responseMiddleware);
router.put("/:id", my.put, my.responseMiddleware);

export default router;
