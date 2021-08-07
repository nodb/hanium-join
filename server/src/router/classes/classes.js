import Boom from "@hapi/boom";
import * as CommonMd from "../middlewares";

export const readClassCodeMd = async (ctx, next) => {
  const { dbPool } = ctx;
  const {} = ctx.query;
  const conn = await dbPool.getConnection();
  await conn.query(
    // eslint-disable-next-line max-len
    "SELECT a.name, a.endDate FROM tb_team t JOIN tb_assignment_team at ON t.id = at.tb_team_id JOIN tb_assignment a ON at.tb_assignment_id = a.id"
  );
};

export const readClassProfessorMd = async (ctx, next) => {
  const { dbPool } = ctx;
  const { memberId } = ctx.params;
  const conn = await dbPool.getConnection();
  const rows = await conn.query(
    "SELECT name, code FROM tb_class WHERE tb_member_id = ?",
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
    "SELECT c.name, c.code FROM tb_class c JOIN tb_enrol e ON e.class_code = c.code WHERE e.isAccept = 1 AND e.member_id = ?",
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
    "INSERT INTO tb_class(name, code, tb_member_id) VALUES (?, ?, ?)",
    [name, code, memberId]
  );

  ctx.state.conn = conn;

  await next();
};

export const queryClassMdByCode = async (ctx, next) => {
  const { code } = ctx.state.reqBody;
  const { conn } = ctx.state;
  const rows = await conn.query(
    "SELECT name, code, tb_member_id FROM tb_class WHERE code = ?",
    [code]
  );

  ctx.state.body = {
    ...rows[0],
  };

  await next();
};

export const readProfessorAll = [readClassProfessorMd, CommonMd.responseMd];

export const readStudentAll = [readClassStudentMd, CommonMd.responseMd];

export const readClass = [];

export const readClass = [];

export const create = [
  getDataFromBodyMd,
  validateDataMd,
  saveClassMd,
  queryClassMdByCode,
  CommonMd.responseMd,
];
