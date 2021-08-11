import Boom from "@hapi/boom";
<<<<<<< HEAD

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
=======
import * as CommonMd from "../middlewares";

export const readClassProfessorMd = async (ctx, next) => {
  const { dbPool } = ctx;
  const { memberId } = ctx.params;
  const conn = await dbPool.getConnection();
  const rows = await conn.query(
    "SELECT name, code FROM tb_class WHERE member_id = ?",
    [memberId]
  );

  ctx.state.body = {
    results: rows,
  };
  await next();
};

export const readClassStudentMd = async (ctx, next) => {
  const { dbPool } = ctx;
  const { memberId } = ctx.params;
  const conn = await dbPool.getConnection();
  const rows = await conn.query(
    // eslint-disable-next-line max-len
    "SELECT c.name as className, c.code, m.name as professorName , e.isAccept FROM tb_class c JOIN tb_enrol e ON e.class_code = c.code JOIN tb_member m ON c.member_id = m.id WHERE e.member_id = ?",
    [memberId]
  );

  ctx.state.body = {
    results: rows,
  };
  await next();
};

export const getDataFromBodyMd = async (ctx, next) => {
  const { name, code, memberId } = ctx.request.body;

  ctx.state.reqBody = {
    name,
    code,
    memberId,
  };
>>>>>>> jaeyoung

  await next();
};

<<<<<<< HEAD
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
=======
export const validateDataMd = async (ctx, next) => {
  const { name, code } = ctx.state.reqBody;

  if (!name || !code) {
    throw Boom.badRequest("field is not");
  }

  await next();
};

export const saveClassMd = async (ctx, next) => {
  const { name, code, memberId } = ctx.state.reqBody;
  const { dbPool } = ctx;

  const conn = await dbPool.getConnection();
  await conn.query(
    "INSERT INTO tb_class(name, code, member_id) VALUES (?, ?, ?)",
    [name, code, memberId]
  );

  ctx.state.conn = conn;

  await next();
};

export const queryClassMdByCode = async (ctx, next) => {
  const { code } = ctx.state.reqBody;
  const { conn } = ctx.state;
  const rows = await conn.query(
    "SELECT name, code, member_id FROM tb_class WHERE code = ?",
    [code]
  );

  ctx.state.body = {
    ...rows[0],
  };
>>>>>>> jaeyoung

  await next();
};

<<<<<<< HEAD
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
=======
export const readProfessorAll = [readClassProfessorMd, CommonMd.responseMd];

export const readStudentAll = [readClassStudentMd, CommonMd.responseMd];
>>>>>>> jaeyoung

export const create = [
  getDataFromBodyMd,
  validateDataMd,
<<<<<<< HEAD
  isDuplicatedEmailMd,
  saveMemberMd,
  queryMemberMdByEmail,
  responseMiddleware,
];

export const read = [validateParamMd, readMemberMd, responseMiddleware];

export const update = [validateParamMd, updateMemberMd, responseMiddleware];

export const remove = [validateParamMd, removeMemberMd, responseMiddleware];
=======
  saveClassMd,
  queryClassMdByCode,
  CommonMd.responseMd,
];
>>>>>>> jaeyoung
