import Boom from "@hapi/boom";
import { v4 as UUID } from "uuid";
import * as CommonMd from "../middlewares";

export const readClassAllMd = async (ctx, next) => {
  const { dbPool } = ctx;
  const conn = await dbPool.getConnection();
  const rows = await conn.query(
    "SELECT id, name, code, tb_member_id FROM tb_class"
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
    "INSERT INTO tb_class(id, name, code, tb_member_id) VALUES (?, ?, ?, ?)",
    [UUID(), name, code, memberId]
  );

  ctx.state.conn = conn;

  await next();
};

export const queryClassMdByCode = async (ctx, next) => {
  const { code } = ctx.state.reqBody;
  const { conn } = ctx.state;
  const rows = await conn.query(
    "SELECT id, name, code, tb_member_id FROM tb_class WHERE code = ?",
    [code]
  );

  ctx.state.body = {
    ...rows[0],
  };

  await next();
};

export const readAll = [readClassAllMd, CommonMd.responseMd];

export const create = [
  getDataFromBodyMd,
  validateDataMd,
  saveClassMd,
  queryClassMdByCode,
  CommonMd.responseMd,
];
