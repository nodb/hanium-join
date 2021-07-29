import Koa from "koa";
import KoaBody from "koa-body";
import mariadb from "mariadb";
import Config from "./config";
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
    app.use(KoaBody());

    app.context.dbPool = pool;

    app.use(Router.routes()).use(Router.allowedMethods());

    app.use(async (ctx, next) => {
      ctx.body = "Hello World";
      next();
    });

    app.listen(3000);

    console.log("Join web server started [port:3000]");
  } catch (e) {
    console.log(e);
  }
};

main();
