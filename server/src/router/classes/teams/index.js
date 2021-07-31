<<<<<<< HEAD
import Router from "@koa/router";
import * as teams from "./teams";

const router = new Router();

router.get("/:id", teams.get);
router.post("/", teams.post, teams.responseMiddleware);
router.put("/:id", teams.put, teams.responseMiddleware);
router.delete("/:id", teams.remove);

export default router;
=======
import Router from "@koa/router";
import * as teams from "./teams";

const router = new Router();

router.get("/:id", teams.get);
router.post("/", teams.post, teams.responseMiddleware);
router.put("/:id", teams.put, teams.responseMiddleware);
router.delete("/:id", teams.remove);

export default router;
>>>>>>> 3eb3fac170c5980ada387928f12e91ed9e75d89d
