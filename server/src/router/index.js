import Router from "@koa/router";
import my from "./my";
import classes from "./classes";
import members from "./members";

const router = new Router({
  prefix: "/api/v1",
});

router.use("/classes", classes.routes());
router.use("/members", members.routes());

export default router;
