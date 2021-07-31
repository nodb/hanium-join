<<<<<<< HEAD
import Router from "@koa/router";
import * as members from "./members";

const router = new Router();


// router.get("/:id", members.get);
// router.post("/", members.post, members.responseMiddleware);
// router.put("/:id", members.put, members.responseMiddleware);
// router.delete("/:id", members.remove);

router.post("/", ...members.create);

export default router;
=======
import Router from "@koa/router";
import * as members from "./members";

const router = new Router();

router.get("/:email", ...members.read);
router.post("/", ...members.create);
router.put("/:email", ...members.update);
router.delete("/:email", ...members.remove);

export default router;
>>>>>>> 3eb3fac170c5980ada387928f12e91ed9e75d89d
