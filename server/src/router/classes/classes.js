import Boom from "@hapi/boom";
import * as CommonMd from "../middlewares";

export const readClassProfessorMd = async (ctx, next) => {
  const { conn } = ctx.state;
  const { memberId } = ctx.params;

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
  const { conn } = ctx.state;
  const { memberId } = ctx.params;

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
  const { name, memberId } = ctx.request.body;

  ctx.state.reqBody = {
    name,
    memberId,
  };

  await next();
};

export const validateDataMd = async (ctx, next) => {
  const { name } = ctx.state.reqBody;

  if (!name) {
    throw Boom.badRequest("field is not");
  }

  await next();
};

export const createCodeMd = async (ctx, next) => {
  let code = Math.random().toString(36).substr(2, 10);
  const { conn } = ctx.state;

  let rows = await conn.query("SELECT code FROM tb_class WHERE code=?", [code]);

  while (rows.length > 0) {
    code = Math.random().toString(36).substr(2, 10);
    rows = await conn.query("SELECT code FROM tb_class WHERE code=?", [code]);
  }

  ctx.state.code = code;
  await next();
};

export const saveClassMd = async (ctx, next) => {
  const { name, memberId } = ctx.state.reqBody;
  const { code } = ctx.state;
  const { conn } = ctx.state;

  await conn.query(
    "INSERT INTO tb_class(name, code, member_id) VALUES (?, ?, ?)",
    [name, code, memberId]
  );

  await next();
};

export const queryClassMdByCode = async (ctx, next) => {
  const { code } = ctx.state;
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

export const readProfessorAll = [
  CommonMd.createConnectionMd,
  readClassProfessorMd,
  CommonMd.responseMd,
];

export const readStudentAll = [
  CommonMd.createConnectionMd,
  readClassStudentMd,
  CommonMd.responseMd,
];

export const create = [
  CommonMd.createConnectionMd,
  getDataFromBodyMd,
  validateDataMd,
  createCodeMd,
  saveClassMd,
  queryClassMdByCode,
  CommonMd.responseMd,
];
