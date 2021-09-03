import Koa from "koa";
import KoaBody from "koa-body";
import mariadb from "mariadb";
import cors from "koa-cors";
import path from "path";
import Config from "./config";
import Router from "./router";
import { errorHandleMd, jwtMd } from "./middlewares";
import jwt from "jsonwebtoken";

const pool = mariadb.createPool({
  host: Config.DB_HOST,
  user: Config.DB_USER,
  password: Config.DB_PASSWORD,
  database: Config.DB_DATABASE,
  port: Config.DB_PORT,
  connectionLimit: Config.DB_CONNECTION_LIMIT,
});

const main = async () => {
  try {
    const app = new Koa();

    app.use(cors());

    app.use(
      KoaBody({
        multipart: true,
        formidable: {
          uploadDir: path.join(__dirname, "../upload"),
          keepExtensions: true,
        },
      })
    );

    // 데이터베이스 Pool을 Koa Context에 저장한다.
    app.context.dbPool = pool;

    app.use(errorHandleMd);
    app.use(jwtMd);
    app.use(Router.routes()).use(Router.allowedMethods());
    app.listen(3000);

    console.log("Join web server started [port:3000]");
  } catch (e) {
    console.log(e);
  }
};

main();
