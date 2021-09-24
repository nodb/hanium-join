import Router from "@koa/router";
import classes from "./classes";
import members from "./members";
import teams from "./teams";
import enrol from "./enrol";
import assignments from "./assignments";
import verification from "./verification";
import terms from "./terms";
import report from "./report";
import comments from "./comments";
// import discuss from "./discuss";
import chats from "./chats";

const router = new Router({
  prefix: "/api/v1",
});

router.use("/classes", classes.routes());
router.use("/members", members.routes());
router.use("/teams", teams.routes());
router.use("/enrol", enrol.routes());
router.use("/assignments", assignments.routes());
router.use("/verify", verification.routes());
router.use("/terms", terms.routes());
router.use("/report", report.routes());
// router.use("/discuss", discuss.routes());
router.use("/comments", comments.routes());
router.use("/chats", chats.routes());

export default router;
