<<<<<<< HEAD
import Router from "@koa/router";
import * as my from "./my";

const router = new Router();

router.get("/", my.get);
router.post("/:id", my.post, my.responseMiddleware);
router.delete("/:id", my.remove, my.responseMiddleware);
router.put("/:id", my.put, my.responseMiddleware);

export default router;
=======
import Router from "@koa/router";
import * as my from "./my";

const router = new Router();

router.get("/", my.get);
router.post("/:id", my.post, my.responseMiddleware);
router.delete("/:id", my.remove, my.responseMiddleware);
router.put("/:id", my.put, my.responseMiddleware);

export default router;
>>>>>>> 3eb3fac170c5980ada387928f12e91ed9e75d89d
