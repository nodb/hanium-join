import Router from "@koa/router";
import Koa from "koa";
import api from "./api";

const app = new Koa();

const router = new Router();

router.use("/api", api.routes());

app.use(router.routes(), router.allowedMethods());

app.listen(4000, () => {});
