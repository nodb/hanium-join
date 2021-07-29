import Boom from "@hapi/boom";
import { createPool } from "mariadb";

export const responseMiddleware = async (ctx) => {
  const { body } = ctx.state;

  ctx.state = 200;
  ctx.body = body;
};

export const get = async (ctx, next) => {
  const { conn } = ctx;
  ctx.state = 200;
  ctx.body = "GET";
};

export const post = async (ctx, next) => {
  ctx.state.method = "POST";

  await next();
};

export const put = async (ctx, next) => {
  ctx.state.method = "PUT";

  await next();
};

export const remove = async (ctx, next) => {
  ctx.state.method = "REMOVE";

  await next();
};

export const getDataFromBodyMd = async (ctx, next) => {
  const { email, password, name, type, mobile } = ctx.request.body;

  console.log(ctx.request.body);

  ctx.state.reqBody = {
    email,
    password,
    name,
    type,
    mobile,
  };

  await next();
};

export const validatedDataMd = async (ctx, next) => {
  const { email, password, name, type } = ctx.state.reqBody;

  if (!email || !password || !type || !name) {
    throw Boom.badRequest();
  }

  await next();
};

export const isDuplicatedEmailMd = async (ctx, next) => {
  const { email } = ctx.state.reqBody;
  const { dbPool } = ctx;

  const conn = await dbPool.getConnection();

  const rows = await conn.query("SELECT * FROM tb_member WHERE email = ?", [
    email,
  ]);

  // 중복 체크 -> 하나라도 있으면 잘 못 된 것. 나중에 중복된 email임을 메세지로 알려준다.
  if (rows.length > 0) {
    throw Boom.badRequest();
  }

  ctx.state.conn = conn;

  await next();
};

export const saveMemberMd = async (ctx, next) => {
  const { email, password, name, type, mobile } = ctx.state.reqBody;

  const { conn } = ctx.state;

  await conn.query(
    "INSERT INTO tb_member(email,name,password,type,mobile) VALUES (?,?,password(?),?,?)",
    [email, name, password, type, mobile]
  );
  await next();
};

export const queryMemberMdByEmail = async (ctx, next) => {
  const { email } = ctx.state.reqBody;

  const { conn } = ctx.state;

  const rows = await conn.query(
    "SELECT email,name,type,mobile,createdAt FROM tb_member WHERE email = ?",
    [email]
  );

  ctx.state.body = rows[0];

  await next();
};

//공통적으로 쓰이게 되므로 분리해서 사용하면 편하다.
export const create = [
  getDataFromBodyMd,
  validatedDataMd,
  isDuplicatedEmailMd,
  saveMemberMd,
  queryMemberMdByEmail,
  responseMiddleware,
];
