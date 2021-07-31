import Router from "@koa/router";
import * as classes from "./classes";
import teams from "./teams";
import assignments from "./assignments";

const router = new Router();

router.get("/:id", classes.get);
router.post("/", classes.post, classes.responseMiddleware);
router.put("/:id", classes.put, classes.responseMiddleware);
router.delete("/:id", classes.remove);

router.use("/:id/teams", teams.routes());
router.use("/:id/assignments", assignments.routes());

export default router;
