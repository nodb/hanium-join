<<<<<<< HEAD
import Router from "@koa/router";
import my from "./my";
import classes from "./classes";
import members from "./members";

const router = new Router({
    prefix: "/api/v1",
});

router.use("/my", my.routes());
router.use("/classes", classes.routes());
router.use("/members", members.routes());

export default router;
=======
import Router from "@koa/router";
import classes from "./classes";
import members from "./members";

const router = new Router({
  prefix: "/api/v1",
});

router.use("/classes", classes.routes());
router.use("/members", members.routes());

export default router;
>>>>>>> 3eb3fac170c5980ada387928f12e91ed9e75d89d
