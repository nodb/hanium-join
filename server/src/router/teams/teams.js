import { Boom } from "@hapi/boom";
import { v4 as UUID } from "uuid";
import * as CommonMd from "../middlewares";

export const saveTeamMd = async (ctx, next) => {
  const { conn } = ctx.state;
  const { classCode } = ctx.params;

  const row = await conn.query(
    "SELECT COUNT(*) as count FROM tb_team WHERE class_code = ?",
    [classCode]
  );

  await conn.query(
    "INSERT INTO tb_team (id, name, class_code) VALUES (?, ?, ?)",
    [UUID(), row[0].count + 1, classCode]
  );

  await next();
};

export const readTeamAllMd = async (ctx, next) => {
  const { conn } = ctx.state;
  const { classCode } = ctx.params;

  const rows = await conn.query("SELECT * FROM tb_team WHERE class_code = ?", [
    classCode,
  ]);

  const members = await conn.query(
    "SELECT t.id as team_id, m.id as member_id, m.name, m.grade, m.department \
    FROM tb_team t JOIN tb_team_member tm ON tm.team_id = t.id \
    JOIN tb_member m ON m.id = tm.member_id \
    WHERE t.class_code = ?",
    [classCode]
  );

  for (let i = 0; i < rows.length; i += 1) {
    const t = members.filter((item) => {
      if (rows[i].id === item.team_id) return true;
    });
    rows[i].team = t;
  }

  ctx.state.body = {
    count: rows.length,
    results: rows,
  };

  await next();
};

export const readTeamMemberAllMd = async (ctx, next) => {
  const { conn } = ctx.state;
  const { classCode } = ctx.params;
  const rows = await conn.query(
    // eslint-disable-next-line max-len
    // eslint-disable-next-line no-multi-str
    "SELECT t.id as teamId, t.name as teamName, m.name, m.grade, m.department \
    FROM tb_team t \
    JOIN tb_team_member tm ON t.id = tm.team_id \
    JOIN tb_member m ON tm.member_id = m.id \
    JOIN tb_class c ON t.class_code = c.code \
    WHERE c.code = ?",
    [classCode]
  );

  ctx.state.body = {
    count: rows.length,
    results: rows,
  };

  await next();
};

export const queryTeamMd = async (ctx, next) => {
  const { name, classCode } = ctx.request.body;
  const { conn } = ctx.state;

  const rows = await conn.query(
    "SELECT id, name, class_code FROM tb_team WHERE name = ? AND class_code = ?",
    [name, classCode]
  );

  ctx.state.body = rows[0];

  await next();
};

export const queryTeamByIdMd = async (ctx, next) => {
  const { teamId } = ctx.state.reqBody;
  const { conn } = ctx.state;

  const rows = await conn.query(
    "SELECT member_id FROM tb_team_member WHERE team_id = ?",
    [teamId]
  );

  ctx.state.body = {
    count: rows.length,
    result: rows,
  };

  await next();
};

export const deleteTeamMd = async (ctx, next) => {
  const { conn } = ctx.state;
  const { teamId } = ctx.params;

  await conn.query("DELETE FROM tb_team WHERE id = ?", [teamId]);

  await next();
};

export const insertStudentTeamMd = async (ctx, next) => {
  const { conn } = ctx.state;
  const payload = ctx.request.body;

  const tuples = payload.map((obj) => [obj.teamId, obj.memberId]);
  console.log(tuples);
  await conn.batch(
    "INSERT INTO tb_team_member (team_id, member_id) VALUES (?, ?)",
    tuples
  );

  ctx.state.reqBody = {
    ...tuples[0].teamId,
  };

  await next();
};

export const readStudentTeamMd = async (ctx, next) => {
  const { conn } = ctx.state;
  const { memberId, classCode } = ctx.query;
  const rows = await conn.query(
    "select m.name, m.grade, m.department, a.teamId \
    FROM (SELECT t.id as teamId FROM tb_team_member tm \
    JOIN tb_member m ON m.id = tm.member_id \
    JOIN tb_team t ON t.id = tm.team_id WHERE t.class_code = ? AND m.id = ?) a \
    JOIN tb_team_member tm ON tm.team_id = a.teamId \
    JOIN tb_member m ON tm.member_id = m.id",
    [classCode, memberId]
  );

  let teamId;
  for (let i = 0; i < rows.length; i++) {
    teamId = rows[i].teamId;
  }

  ctx.state.body = {
    results: rows,
    count: rows.length,
    teamId: teamId,
  };

  await next();
};

// TODO
export const deleteStudentTeamMd = async (ctx, next) => {
  const { conn } = ctx.state;
  const { memberId, teamId } = ctx.query;

  const array = memberId.split(",");

  console.log(array, teamId);
  await conn.query(
    "DELETE FROM tb_team_member WHERE member_id IN (?) AND team_id = ?",
    [array, teamId]
  );

  await next();
};

export const create = [
  CommonMd.createConnectionMd,
  saveTeamMd,
  queryTeamMd,
  CommonMd.responseMd,
];

// 팀원 전체 조회
export const readAll = [
  CommonMd.createConnectionMd,
  readTeamAllMd,
  CommonMd.responseMd,
];

// 팀 삭제
export const removeTeam = [
  CommonMd.createConnectionMd,
  deleteTeamMd,
  CommonMd.responseMd,
];

// 팀 수정 - 팀에 학생 추가
export const insertStudentTeam = [
  CommonMd.createConnectionMd,
  insertStudentTeamMd,
  // queryTeamByIdMd,
  CommonMd.responseMd,
];

// 팀 수정 - 팀에서 학생 제거
export const deleteStudentTeam = [
  CommonMd.createConnectionMd,
  deleteStudentTeamMd,
  CommonMd.responseMd,
];

// 학생 팀 조회
export const readStudentTeam = [
  CommonMd.createConnectionMd,
  readStudentTeamMd,
  CommonMd.responseMd,
];
