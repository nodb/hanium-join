import * as CommonMd from "../middlewares";

export const getDataFromBodyMd = async (ctx, next) => {
  const { contents } = ctx.request.body;

  ctx.state.reqBody = {
    contents,
  };

  await next();
};

export const updateAssignmentTeamMd = async (ctx, next) => {
  const { dbPool } = ctx;
  const conn = await dbPool.getConnection();

  const { id } = ctx.params;
  const { contents } = ctx.state.reqBody;
  const file = ctx.request.files === undefined ? null : ctx.request.files.file;

  const fileName = file ? file.name : null;

  await conn.query(
    "UPDATE tb_assignment_team SET contents = ?, file = ? WHERE id = ?",
    [contents, fileName, id]
  );

  ctx.state.conn = conn;

  await next();
};

export const queryAssignmentTeamMd = async (ctx, next) => {
  const { id } = ctx.params;
  const { conn } = ctx.state;

  const rows = await conn.query(
    "SELECT id, isCheck, assignment_id, team_id, contents, file From tb_assignment_team WHERE id = ?",
    [id]
  );

  ctx.state.body = {
    ...rows[0],
  };

  await next();
};

export const readAssignmentTeamMd = async (ctx, next) => {
  const { id } = ctx.params;
  const { dbPool } = ctx;
  const conn = await dbPool.getConnection();

  const rows = await conn.query(
    "SELECT id, isCheck, assignment_id, team_id, contents, file From tb_assignment_team WHERE id = ?",
    [id]
  );

  ctx.state.body = {
    ...rows[0],
  };

  await next();
};

export const submit = [
  getDataFromBodyMd,
  updateAssignmentTeamMd,
  queryAssignmentTeamMd,
  CommonMd.responseMd,
];

export const read = [readAssignmentTeamMd, CommonMd.responseMd];
