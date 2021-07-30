import Boom from "@hapi/boom";

export const responseMiddleware = async (ctx) => {
  const { body } = ctx.state;

  ctx.state = 200;

  ctx.body = body;
};

export const getDataFromBodyMd = async (ctx, next) => {
  const { name, code, isCheck } = ctx.request.body;

  console.log(ctx.request.body);

  ctx.state.reqBody = {
    name, 
    code, 
    isCheck,
  };

  await next();
};

export const validateDataMd = async (ctx, next) => {
  const { name, code, isCheck } = ctx.state.reqBody;

  if (!code || !isCheck || !name) {
    throw Boom.badRequest();
  }

  await next();
};

export const validateParamMd = async (ctx, next) => {
  const { email } = ctx.params;
  const { dbPool } = ctx;

  const conn = await dbPool.getConnection();
  const rows = await conn.query("SELECT * FROM tb_member WHERE email = ?", [
    email,
  ]);

  if (rows.length === 0) {
    throw Boom.badRequest();
  }

  ctx.state.conn = conn;

  await next();
};

export const isDuplicatedEmailMd = async (ctx, next) => {
  const { email } = ctx.state.reqBody;
  const { dbPool } = ctx;

  const conn = await dbPool.getConnection();
  const rows = await conn.query("SELECT * FROM tb_member WHERE email = ?", [
    email,
  ]);

  if (rows.length > 0) {
    throw Boom.badRequest();
  }
  
  ctx.state.conn = conn;

  await next();
};

export const saveMemberMd = async (ctx, next) => {
  const { email, password, name, type, mobile } = ctx.state.reqBody;
  const { conn } = ctx.state;

  // eslint-disable-next-line max-len
  await conn.query(
    "INSERT INTO tb_member(email, name, password, type, mobile) VALUES (?, ?, password(?), ?, ?)",
    [email, name, password, type, mobile]
  );

  await next();
};

export const queryMemberMdByEmail = async (ctx, next) => {
  const { email } = ctx.state.reqBody;
  const { conn } = ctx.state;

  const rows = await conn.query(
    "SELECT email, name, type, mobile, createdAt FROM tb_member WHERE email = ?",
    [email]
  );

  ctx.state.body = rows[0];

  await next();
};

export const removeMemberMd = async (ctx, next) => {
  const { conn } = ctx.state;
  const { email } = ctx.params;

  await conn.query("DELETE FROM tb_member WHERE email = ?", [email]);
  await next();
};

export const readMemberMd = async (ctx, next) => {
  const { conn } = ctx.state;
  const { email } = ctx.params;

  const rows = await conn.query(
    "SELECT email, name, type, mobile, createdAt FROM tb_member WHERE email = ?",
    [email]
  );

  ctx.state.body = rows[0];

  await next();
};

export const updateMemberMd = async (ctx, next) => {
  const { conn } = ctx.state;
  const { email } = ctx.params;
  const { name, type, mobile } = ctx.request.body;

  const sql =
    "UPDATE tb_member SET name = ?, type = ?, mobile = ? WHERE email = ?";
  const rows = await conn.query(sql, [name, type, mobile, email]);

  ctx.state.body = rows[0];

  await next();
};

export const create = [
  getDataFromBodyMd,
  validateDataMd,
  isDuplicatedEmailMd,
  saveMemberMd,
  queryMemberMdByEmail,
  responseMiddleware,
];

export const read = [validateParamMd, readMemberMd, responseMiddleware];

export const update = [validateParamMd, updateMemberMd, responseMiddleware];

export const remove = [validateParamMd, removeMemberMd, responseMiddleware];
