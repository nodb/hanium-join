<<<<<<< HEAD
import Router from "@koa/router";
import Koa from "koa";
import api from "./api";

const app = new Koa();

const router = new Router();

router.use("/api", api.routes());

app.use(router.routes(), router.allowedMethods());

app.listen(4000, () => {});
=======
import Koa from "koa";
import Router from "./router";
import KoaBody from "koa-body";

const app = new Koa();
app.use(KoaBody());

app.use(Router.routes()).use(Router.allowedMethods());

app.use(async (ctx, next) => {
  ctx.body = "Hello World";
  next();
});

app.listen(3000);
>>>>>>> master
