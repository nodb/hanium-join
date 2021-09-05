import Boom from "@hapi/boom";
import * as CommonMd from "../middlewares";
import { insertStudentTeamMd } from "../teams/teams";

export const readReportAllMd = async (ctx, next) => {
  const { skip, limit } = ctx.state.query;
  const { memberId } = ctx.params;
  const { dbPool } = ctx;
  const conn = await dbPool.getConnection();
  let sql =
    "select r.id as report_id, t.id as team_id, t.name, r.file "
    + "FROM tb_report r "
    + "JOIN tb_assignment_team at ON r.assignment_team_id = at.id "
    + "JOIN tb_team t ON at.team_id = t.id "
    + "JOIN tb_class c ON t.class_code = c.code "
    + "JOIN tb_member m ON c.member_id = m.id "
    + "WHERE m.id = ? LIMIT ?, ?";
  const rows = await conn.query(sql, [memberId, skip, limit]);
  sql =
  "select t.id AS team_id, m.name, m.department "
  + "FROM tb_member m "
  + "JOIN tb_team_member tm ON m.id = tm.member_id "
  + "JOIN tb_team t ON tm.team_id = t.id";

  const members = await conn.query(sql);
  // for (let i = 0; i<rows.length; i+=1) {
  //   const t = await conn.query(sql, [rows[i].team_id]);
  //   rows[i].team = t;
  // }
  console.log(members);
  for (let i=0; i<rows.length; i+=1) {
    const t = members.filter((item)=> {if(rows[i].team_id===item.team_id) return true;});
    rows[i].team = t;
  }

  ctx.state.conn = conn;
  ctx.state.params = { memberId };
  ctx.state.body = {
    results: rows,
  };

  await next();
};

export const readReportAllCountMd = async (ctx, next) => {
  const { skip, limit } = ctx.state.query;
  const { memberId } = ctx.params;
  const conn = ctx.state.conn;

  const sql =
    "select COUNT(*) AS count "
    + "FROM tb_report r "
    + "JOIN tb_assignment_team at ON r.assignment_team_id = at.id "
    + "JOIN tb_team t ON at.team_id = t.id "
    + "JOIN tb_class c ON t.class_code = c.code "
    + "JOIN tb_member m ON c.member_id = m.id "
    + "WHERE m.id = ? LIMIT ?, ?";
  const rows = await conn.query(sql, [memberId, skip, limit]);

  ctx.state.body = {
    ...ctx.state.body,
    total: rows[0].count,
  };

  await next();
};

export const readAll = [
  CommonMd.validataListParamMd,
  readReportAllMd,
  readReportAllCountMd,
  CommonMd.responseMd,
];
