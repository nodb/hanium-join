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
