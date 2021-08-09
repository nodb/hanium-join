import Router from "@koa/router";
import classes from "./classes";
import members from "./members";
import teams from "./teams";
import assignments from "./assignments";

const router = new Router({
  prefix: "/api/v1",
});

router.use("/classes", classes.routes());
router.use("/members", members.routes());
router.use("/teams", teams.routes());
router.use("/assignments", assignments.routes());

export default router;
