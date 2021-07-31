<<<<<<< HEAD
import Router from "@koa/router";
import * as assignments from "./assignments";

const router = new Router();

router.get("/:id", assignments.get);
router.post("/", assignments.post, assignments.responseMiddleware);
router.put("/:id", assignments.put, assignments.responseMiddleware);
router.delete("/:id", assignments.remove, assignments.responseMiddleware);

export default router;
=======
import Router from "@koa/router";
import * as assignments from "./assignments";

const router = new Router();

router.get("/:id", assignments.get);
router.post("/", assignments.post, assignments.responseMiddleware);
router.put("/:id", assignments.put, assignments.responseMiddleware);
router.delete("/:id", assignments.remove, assignments.responseMiddleware);

export default router;
>>>>>>> 3eb3fac170c5980ada387928f12e91ed9e75d89d
