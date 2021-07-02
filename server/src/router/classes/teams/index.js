import Router from "@koa/router";
import * as teams from "./teams";

const router = new Router();

router.get("/:id", teams.get);
router.post("/", teams.post, teams.responseMiddleware);
router.put("/:id", teams.put, teams.responseMiddleware);
router.delete("/:id", teams.remove);

export default router;
