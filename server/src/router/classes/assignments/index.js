import Router from "@koa/router";
import * as assignments from "./assignments";

const router = new Router();

router.get("/:id", assignments.get);
router.post("/", assignments.post, assignments.responseMiddleware);
router.put("/:id", assignments.put, assignments.responseMiddleware);
router.delete("/:id", assignments.remove, assignments.responseMiddleware);

export default router;