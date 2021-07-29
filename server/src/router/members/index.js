import Router from "@koa/router";
import * as members from "./members";

const router = new Router();

router.get("/:email", ...members.read);
router.post("/", ...members.create);
router.put("/:email", ...members.update);
router.delete("/:email", ...members.remove);

export default router;
