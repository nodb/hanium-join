import Router from "@koa/router";
import booksCtrl from "./books.controller";

const books = new Router();

books.get("/", booksCtrl.list);

books.post("/", booksCtrl.create);

books.put("/", booksCtrl.replace);

books.patch("/", booksCtrl.update);

books.delete("/", booksCtrl.delete);

export default books;
