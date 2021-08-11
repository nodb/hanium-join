import Boom from "@hapi/boom";
import { v4 as UUID } from "uuid";
import * as CommonMd from "../middlewares";

export const getDataFromBodyMd = async (ctx, next) => {
  const {
    name, content, progress, point, startDate, endDate, image, classCode, teams
  } = ctx.request.body;

  console.log(ctx.request.body);

  ctx.state.reqBody = {
    name, content, progress, point, startDate, endDate, image, classCode,
  };

  await next();
};

export const validateDataMd = async (ctx, next) => {
  const {
    name, content, progress, point, startDate, endDate, image, classCode, teams
  } = ctx.request.body;

  if (!name || !point || !startDate || !endDate || !classCode) {
    throw Boom.badRequest("field is not fulfiled");
  }

  await next();
};

export const saveAssignmentMd = async (ctx, next) => {
  const {
    name, content, progress, point, startDate, endDate, classCode, teams
  } = ctx.request.body;

  const { image } = ctx.request.files;

  const { dbPool } = ctx;

  const conn = await dbPool.getConnection();
  ctx.state.conn = conn;
  const assignmentId = UUID();
  const imageName = image===undefined ? null:image.name;
  await conn.query(
    // eslint-disable-next-line max-len
    "INSERT INTO tb_assignment(id, name, content, progress, point, startDate, endDate, image, class_code) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [assignmentId, name, content, progress, point, startDate, endDate, imageName, classCode],
  );
  for(let i=0; i<teams.length; i++){
    await conn.query(
      // eslint-disable-next-line max-len
      "INSERT INTO tb_assignment_team(id, isCheck, assignment_id, team_id) VALUES (?, ?, ?, ?)",
      [UUID(), 0, assignmentId, teams[i]],
    );
  }

  await next();
};

export const queryAssignmentMd = async (ctx, next) => {
  // const { id } = ctx.state.reqBody;
  // const { conn } = ctx.state;

  // const rows = await conn.query(
  //   "SELECT id, name, content, progress, point, startDate, endDate, image, class_code FROM tb_assignment WHERE id = ?",
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
  let { classCode } = ctx.query;
  const { dbPool } = ctx;
  const conn = await dbPool.getConnection();
  let rows;
  if(classCode){
    rows = await conn.query(
      "SELECT id, name, content, progress, point, startDate, endDate, image, class_code FROM tb_assignment WHERE class_code = ? LIMIT ?, ?",
      [classCode, skip, limit],
    );
  } else {
    rows = await conn.query(
      "SELECT id, name, content, progress, point, startDate, endDate, image, class_code FROM tb_assignment LIMIT ?, ?",
      [skip, limit],
    );
  }
  
  ctx.state.body = {
    results: rows,
  };

  ctx.state.query = {
    ...ctx.state.query,
    classCode: classCode,
  }

  await next();
};

export const readAssignmentAllCountMd = async (ctx, next) => {
  const { dbPool } = ctx;
  const { classCode } = ctx.state.query;
  const conn = await dbPool.getConnection();
  let rows;
  if(classCode) rows = await conn.query("SELECT COUNT(*) AS count  FROM tb_assignment WHERE class_code = ?", [classCode]);
  else rows = await conn.query("SELECT COUNT(*) AS count  FROM tb_assignment");

  ctx.state.body = {
    ...ctx.state.body,
    total: rows[0].count,
  };

  await next();
};

export const readAssignmentByIdMd = async (ctx, next) => {
  const { id } = ctx.params;
  const { dbPool } = ctx;

  const conn = await dbPool.getConnection();
  const rows = await conn.query(
    "SELECT id, name, content, progress, point, startDate, endDate, image, class_code FROM tb_assignment WHERE id = ?",
    [id],
  );

  ctx.state.body = {
    ...rows[0],
  };

  const teams = await conn.query(
    "SELECT at.id, t.name, at.team_id FROM tb_assignment_team at JOIN tb_team t ON at.team_id = t.id WHERE assignment_id = ?",
    [id]
  );

  ctx.state.body = {
    ...ctx.state.body,
    team: teams,
  }

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
    name, content, progress, point, startDate, endDate, classCode, teams
  } = ctx.request.body;

  const { image } = ctx.request.files;
  const imageName = image===undefined ? null:image.name;
  const sql =
  // eslint-disable-next-line max-len
  "UPDATE tb_assignment SET name = ?, content = ?, progress = ?, point = ?, startDate = ?, endDate = ?, image = ?, class_code = ?  WHERE id = ?";
  await conn.query(sql, [
    name, content, progress, point, startDate, endDate, imageName, classCode, id,
  ]);
  await conn.query("DELETE FROM tb_assignment_team WHERE assignment_id = ?", [id]);

  // for(let i=0; i<teams.length; i++){
  //   await conn.query(
  //     // eslint-disable-next-line max-len
  //     "INSERT INTO tb_assignment_team(id, isCheck, assignment_id, team_id) VALUES (?, ?, ?, ?)",
  //     [UUID(), 0, assignmentId, teams[i]],
  //   );
  // }

  ctx.state.conn = conn;

  await next();
};

export const queryAssignmentMdById = async (ctx, next) => {
  const { id } = ctx.params;
  const { conn } = ctx.state;

  const sql =
    // eslint-disable-next-line max-len
    "SELECT id, name, content, progress, point, startDate, endDate, image, class_code FROM tb_assignment WHERE id = ?";
  const rows = await conn.query(sql, [id]);

  ctx.state.body = {
    ...rows[0],
  };

  await next();
};

export const readAssignmentByMemberMd = async (ctx, next) => {
  const { memberId } = ctx.params;
  const { skip, limit } = ctx.state.query;
  const { dbPool } = ctx;
  const conn = await dbPool.getConnection();
  const rows = await conn.query(
    "select a.name, a.content, at.isCheck, a.startDate, a.endDate \
    from tb_team_member tm \
    JOIN tb_team t ON t.id = tm.team_id \
    JOIN tb_assignment_team at ON at.team_id = t.id \
    JOIN tb_assignment a ON a.id = at.assignment_id \
    JOIN tb_class c ON c.code = a.class_code \
    WHERE tm.member_id = ? LIMIT ?, ?",
    [memberId, skip, limit],
  );

  ctx.state.body = {
    results: rows,
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

export const readByMember = [
  CommonMd.validataListParamMd,
  readAssignmentByMemberMd,
  CommonMd.responseMd,
];

export const readId = [
  CommonMd.validateIdParamMd,
  readAssignmentByIdMd,
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
