import Router from "@koa/router";
import classes from "./classes";
import members from "./members";
import comment from "./comments";

const router = new Router({
  prefix: "/api/v1",
});

router.use("/classes", classes.routes());
router.use("/members", members.routes());
router.use("/comments", comment.routes());

export default router;
