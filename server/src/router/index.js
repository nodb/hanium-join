import Router from "@koa/router";
import classes from "./classes";
import members from "./members";
import teams from "./teams";

const router = new Router({
  prefix: "/api/v1",
});

router.use("/classes", classes.routes());
router.use("/members", members.routes());
router.use("/teams", teams.routes());

export default router;
