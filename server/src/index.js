import Koa from "koa";
import KoaBody from "koa-body";
import mariadb from "mariadb";
import path from "path";
import Config from "./config";
import { errorHandleMd } from "./middlewares";
import Router from "./router";

const pool = mariadb.createPool({
  host: Config.DB_HOST,
  user: Config.DB_USER,
  password: Config.DB_PASSWORD,
  database: Config.DB_DATABASE,
  connectionLimit: Config.DB_CONNECTION_LIMIT,
});

// const getMariadbConnection = async () => {
//   const conn = await pool.getConnection();
//   return conn;
// };

const main = async () => {
  try {
    // const conn = await getMariadbConnection();

    const app = new Koa();
    app.use(
      KoaBody({
        multipart: true,
        formidable: {
          uploadDir: path.join(__dirname, "../upload"),
          keepExtensions: true,
        },
      })
    );

    // 데이터베이스 Pool을 Koa Context에 저장한다. ->글로벌하게 설정
    app.context.dbPool = pool;

    app.use(errorHandleMd);
    app.use(Router.routes()).use(Router.allowedMethods());
    app.listen(3000);

    console.log("Join web server started [port:3000]");
  } catch (e) {
    console.log(e);
  }
};

main();
