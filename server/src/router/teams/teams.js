import { v4 as UUID } from "uuid";
import * as CommonMd from "../middlewares";

export const saveTeamMd = async (ctx, next) => {
  const { dbPool } = ctx;
  const { name, classCode } = ctx.request.body;

  const conn = await dbPool.getConnection();
  await conn.query(
    "INSERT INTO tb_team (id, name, tb_class_code)  VALUES (?, ?, ?)",
    [UUID(), name, classCode]
  );
};

export const readTeamAllMd = async (ctx, next) => {
  const { dbPool } = ctx;
  const { classCode } = ctx.params;
  const conn = await dbPool.getConnection();
  const rows = await conn.query(
    // eslint-disable-next-line max-len
    "SELECT t.name m.name, m.grade, m.department FROM tb_team t JOIN tb_team_student ts ON t.id = ts.tb_team_id JOIN tb_member m ON ts.tb_member_id = m.id LEFT JOIN tb_class c ON t.tb_class_code = c.code WHERE c.code = ?",
    [classCode]
  );

  ctx.state.body = rows;

  await next();
};

export const deleteStudentMd = async (ctx, next) => {
  const { dbPool } = ctx;
  const { teamId } = ctx.params;
  const conn = await dbPool.getConnection();
  await conn.query(
    "DELETE tm, t FROM tb_team_member tm JOIN tb_team t ON t.id = tm.team_id WHERE tm.team_id = ?",
    [teamId]
  );

  await next();
};

export const create = [saveTeamMd, CommonMd.responseMd];

// 팀원 전체 조회
export const readAll = [readTeamAllMd, CommonMd.responseMd];

// 팀 삭제
export const removeTeam = [deleteStudentMd, CommonMd.responseMd];

// 팀 수정
export const updateTeam = [];

// 학생 팀 조회
