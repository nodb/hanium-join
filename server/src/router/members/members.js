import Boom from "@hapi/boom";
import * as CommonMd from "../middlewares";

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

export const validateDataMd = async (ctx, next) => {
  const { email, password, name, type, mobile } = ctx.state.reqBody;

  if (!email || !password || !type || !name) {
    throw Boom.badRequest("field is not fulfiled");
  }

  await next();
};

export const validateUpdateDataMd = async (ctx, next) => {
  const {
    // eslint-disable-next-line no-unused-vars
    name,
    type,
    mobile,
  } = ctx.state.reqBody;

  if (!type || !name) {
    throw Boom.badRequest("field is not fulfiled");
  }

  await next();
};

export const isDuplicatedEmailMd = async (ctx, next) => {
  const { email } = ctx.state.reqBody;
  const { files } = ctx.request;
  const { dbPool } = ctx;

  console.log(files);

  const conn = await dbPool.getConnection();
  const rows = await conn.query("SELECT * FROM tb_member WHERE email = ?", [
    email,
  ]);

  if (rows.length > 0) {
    throw Boom.badRequest("duplicated email");
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
  const { id } = ctx.params;

  await conn.query("DELETE FROM tb_member WHERE email = ?", [id]);
  await next();
};

export const readMemberMd = async (ctx, next) => {
  const { id } = ctx.params;
  const { dbPool } = ctx;

  const conn = await dbPool.getConnection();
  const rows = await conn.query(
    "SELECT id, email, name, type, mobile, createdAt FROM tb_member WHERE id = ?",
    [id]
  );

  ctx.state.body = {
    ...rows[0],
  };

  await next();
};

export const updateMemberMd = async (ctx, next) => {
  const { id } = ctx.params;
  const { dbPool } = ctx;

  const conn = await dbPool.getConnection();
  const { name, type, mobile } = ctx.request.body;

  const sql =
    "UPDATE tb_member SET name = ?, type = ?, mobile = ? WHERE id = ?";
  const rows = await conn.query(sql, [name, type, mobile, id]);

  ctx.state.body = {
    ...rows[0],
  };

  await next();
};

export const readMemberAllMd = async (ctx, next) => {
  const { skip, limit } = ctx.state.query;
  const { dbPool } = ctx;
  const conn = await dbPool.getConnection();
  const rows = await conn.query(
    "SELECT id, email, name, type, mobile, createdAt FROM tb_member LIMIT ?, ?",
    [skip, limit]
  );

  ctx.state.body = {
    results: rows,
  };

  await next();
};

export const readMemberAllCountMd = async (ctx, next) => {
  const { dbPool } = ctx;
  const conn = await dbPool.getConnection();
  const rows = await conn.query("SELECT COUNT(*) AS count  FROM tb_member");

  ctx.state.body = {
    ...ctx.state.body,
    total: rows[0].count,
  };

  await next();
};

// eslint-disable-next-line max-len
export const create = [
  getDataFromBodyMd,
  validateDataMd,
  isDuplicatedEmailMd,
  saveMemberMd,
  queryMemberMdByEmail,
  CommonMd.responseMd,
];

// skip, limit (skip: 시작위치, limit: 가져올 데이터 수)
// ex) skip=0, limit=10 이면 0번째부터 10개를 가져와라
// skip=10, limit=10 10번째부터 10개를 가져와라
export const readAll = [
  CommonMd.validataListParamMd,
  readMemberAllMd,
  readMemberAllCountMd,
  CommonMd.responseMd,
];

export const read = [
  CommonMd.validateIdParamMd,
  readMemberMd,
  CommonMd.responseMd,
];

export const update = [
  CommonMd.validateIdParamMd,
  validateUpdateDataMd,
  updateMemberMd,
  CommonMd.responseMd,
];

export const remove = [
  CommonMd.validateIdParamMd,
  removeMemberMd,
  CommonMd.responseMd,
];
