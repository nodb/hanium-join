import Boom from "@hapi/boom";
import { v4 as UUID } from "uuid";
import * as CommonMd from "../middlewares";

export const getDataFromBodyMd = async (ctx, next) => {
  const { memberId, assignmentId, contents } = ctx.request.body;

  console.log(ctx.request.body);

  ctx.state.reqBody = {
    memberId,
    assignmentId,
    contents,
  };

  await next();
};

export const validateDataMd = async (ctx, next) => {
  const { memberId, assignmentId, contents } = ctx.state.reqBody;

  if (!memberId || !assignmentId || !contents) {
    throw Boom.badRequest("field is not fulfiled");
  }

  await next();
};

export const createCommentMd = async (ctx, next) => {
  const { memberId, assignmentId, contents } = ctx.state.reqBody;
  const { dbPool } = ctx;

  const conn = await dbPool.getConnection();
  await conn.query(
    "INSERT INTO tb_comment(id, contents, tb_member_id, tb_assignment_id) VALUES (?,?,?,?)",
    [UUID(), contents, memberId, assignmentId]
  );

  ctx.state.conn = conn;

  await next();
};

export const readCommentAllMd = async (ctx, next) => {
  const { skip, limit } = ctx.state.query;
  const { assignmentId } = ctx.params;
  const { dbPool } = ctx;

  const conn = await dbPool.getConnection();
  const rows = await conn.query(
    "SELECT C.createdAt, C.contents, M.name FROM tb_comment C JOIN tb_member M ON C.tb_member_id = M.id WHERE C.tb_assignment_id=? LIMIT ?, ?",
    [assignmentId, skip, limit]
  );

  ctx.state.body = {
    results: rows,
  };

  await next();
};

export const readCommentAllCountMd = async (ctx, next) => {
  const { dbPool } = ctx;
  const conn = await dbPool.getConnection();
  const rows = await conn.query("SELECT COUNT(*) AS count  FROM tb_comment");

  ctx.state.body = {
    ...ctx.state.body,
    total: rows[0].count,
  };

  await next();
};

export const removeCommentMd = async (ctx, next) => {
  const { dbPool } = ctx;
  const conn = await dbPool.getConnection();
  const { id } = ctx.params;

  await conn.query("DELETE FROM tb_comment WHERE id = ?", [id]);
  await next();
};

export const create = [
  getDataFromBodyMd,
  validateDataMd,
  createCommentMd,
  CommonMd.responseMd,
];

export const readAll = [
  CommonMd.validataListParamMd,
  readCommentAllMd,
  readCommentAllCountMd,
  CommonMd.responseMd,
];

export const remove = [removeCommentMd, CommonMd.responseMd];
