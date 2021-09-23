import * as CommonMd from "../middlewares";

export const getDataFromBodyMd = async (ctx, next) => {
  const { contents } = ctx.request.body;

  ctx.state.reqBody = {
    contents,
  };

  await next();
};

export const updateAssignmentTeamMd = async (ctx, next) => {
  const { conn } = ctx.state;

  const { id } = ctx.params;
  const { contents } = ctx.state.reqBody;
  const file = ctx.request.files === undefined ? null : ctx.request.files.file;

  const fileName = file ? file.name : null;

  await conn.query(
    "UPDATE tb_assignment_team SET contents = ?, file = ? WHERE id = ?",
    [contents, fileName, id]
  );

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

export const queryAssignmentTeamByteamIdMd = async (ctx, next) => {
  const { assignmentId, teamId } = ctx.params;
  const { conn } = ctx.state;
  const rows = await conn.query(
    "SELECT * FROM tb_assignment_team WHERE assignment_id = ? AND team_id = ?",
    [assignmentId, teamId]
  );

  ctx.state.body = {
    ...rows[0],
  };

  await next();
};

export const submit = [
  CommonMd.createConnectionMd,
  getDataFromBodyMd,
  updateAssignmentTeamMd,
  queryAssignmentTeamMd,
  CommonMd.responseMd,
];

export const read = [
  CommonMd.createConnectionMd,
  readAssignmentTeamMd,
  CommonMd.responseMd,
];

export const query = [
  CommonMd.createConnectionMd,
  queryAssignmentTeamByteamIdMd,
  CommonMd.responseMd,
];
