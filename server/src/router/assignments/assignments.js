import Boom from "@hapi/boom";
import { v4 as UUID } from "uuid";
import * as CommonMd from "../middlewares";

export const getDataFromBodyMd = async (ctx, next) => {
  const {
    name, content, progress, point, startDate, endDate, image, classCode,
  } = ctx.request.body;

  console.log(ctx.request.body);

  ctx.state.reqBody = {
    name, content, progress, point, startDate, endDate, image, classCode,
  };

  await next();
};

export const validateDataMd = async (ctx, next) => {
  const {
    name, content, progress, point, startDate, endDate, image, classCode,
  } = ctx.request.body;

  if (!name || !point || !startDate || !endDate || !classCode) {
    throw Boom.badRequest("field is not fulfiled");
  }

  await next();
};

export const saveAssignmentMd = async (ctx, next) => {
  const {
    name, content, progress, point, startDate, endDate, classCode,
  } = ctx.request.body;

  const { image } = ctx.request.files;

  const { dbPool } = ctx;

  const conn = await dbPool.getConnection();
  ctx.state.conn = conn;

  await conn.query(
    // eslint-disable-next-line max-len
    "INSERT INTO tb_assignment(id, name, content, progress, point, startDate, endDate, image, tb_class_code) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [UUID(), name, content, progress, point, startDate, endDate, image.name, classCode],
  );

  await next();
};

export const queryAssignmentMd = async (ctx, next) => {
  // const { id } = ctx.state.reqBody;
  // const { conn } = ctx.state;

  // const rows = await conn.query(
  //   "SELECT id, name, content, progress, point, startDate, endDate, image, tb_class_code FROM tb_assignment WHERE id = ?",
  //   [id],
  // );

  ctx.state.body = {
    ...ctx.state.body,
    success: true,
  };

  await next();
};

export const readAssignmentAllMd = async (ctx, next) => {
  const { skip, limit } = ctx.state.query;
  const { dbPool } = ctx;
  const conn = await dbPool.getConnection();
  const rows = await conn.query(
    "SELECT id, name, content, progress, point, startDate, endDate, image, tb_class_code FROM tb_assignment LIMIT ?, ?",
    [skip, limit],
  );

  ctx.state.body = {
    results: rows,
  };

  await next();
};

export const readAssignmentAllCountMd = async (ctx, next) => {
  const { dbPool } = ctx;
  const conn = await dbPool.getConnection();
  const rows = await conn.query("SELECT COUNT(*) AS count  FROM tb_assignment");

  ctx.state.body = {
    ...ctx.state.body,
    total: rows[0].count,
  };

  await next();
};

export const readAssignmentIdMd = async (ctx, next) => {
  const { id } = ctx.params;
  const { dbPool } = ctx;

  const conn = await dbPool.getConnection();
  const rows = await conn.query(
    "SELECT id, name, content, progress, point, startDate, endDate, image, tb_class_code FROM tb_assignment WHERE id = ?",
    [id],
  );

  ctx.state.body = {
    ...rows[0],
  };

  await next();
};

export const removeAssignmentMd = async (ctx, next) => {
  const { dbPool } = ctx;

  const conn = await dbPool.getConnection();
  const { id } = ctx.params;

  await conn.query("DELETE FROM tb_Assignment WHERE id = ?", [id]);

  ctx.state.body = {
    ...ctx.state.body,
    success: true,
  };

  await next();
};

export const updateAssignmentMd = async (ctx, next) => {
  const { id } = ctx.params;
  const { dbPool } = ctx;

  const conn = await dbPool.getConnection();
  const {
    name, content, progress, point, startDate, endDate, classCode,
  } = ctx.request.body;

  const { image } = ctx.request.files;

  const sql =
  // eslint-disable-next-line max-len
  "UPDATE tb_assignment SET name = ?, content = ?, progress = ?, point = ?, startDate = ?, endDate = ?, image = ?, tb_class_code = ?  WHERE id = ?";
  await conn.query(sql, [
    name, content, progress, point, startDate, endDate, image.name, classCode, id,
  ]);

  ctx.state.conn = conn;

  await next();
};

export const queryAssignmentMdById = async (ctx, next) => {
  const { id } = ctx.params;
  const { conn } = ctx.state;

  const sql =
    // eslint-disable-next-line max-len
    "SELECT id, name, content, progress, point, startDate, endDate, image, tb_class_code FROM tb_assignment WHERE id = ?";
  const rows = await conn.query(sql, [id]);

  ctx.state.body = {
    ...rows[0],
  };

  await next();
};

export const create = [
  getDataFromBodyMd,
  validateDataMd,
  saveAssignmentMd,
  queryAssignmentMd,
  CommonMd.responseMd,
];

export const readAll = [
  CommonMd.validataListParamMd,
  readAssignmentAllMd,
  readAssignmentAllCountMd,
  CommonMd.responseMd,
];

export const readId = [
  CommonMd.validateIdParamMd,
  readAssignmentIdMd,
  CommonMd.responseMd,
];

export const update = [
  CommonMd.validateIdParamMd,
  // validateUpdateDataMd,
  updateAssignmentMd,
  queryAssignmentMdById,
  CommonMd.responseMd,
];

export const remove = [
  CommonMd.validateIdParamMd,
  removeAssignmentMd,
  CommonMd.responseMd,
];
