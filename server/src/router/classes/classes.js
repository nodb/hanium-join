import Boom from "@hapi/boom";
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
    count: rows.length,
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
    count: rows.length,
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

  await next();
};

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

  await next();
};

export const readProfessorAll = [readClassProfessorMd, CommonMd.responseMd];

export const readStudentAll = [readClassStudentMd, CommonMd.responseMd];

export const create = [
  getDataFromBodyMd,
  validateDataMd,
  saveClassMd,
  queryClassMdByCode,
  CommonMd.responseMd,
];
