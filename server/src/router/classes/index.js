import Router from "@koa/router";
import * as classes from "./classes";

const router = new Router();

router.get("/", ...classes.readAll);
router.post("/", ...classes.create);

export default router;
