import Boom from "@hapi/boom";
import * as CommonMd from "../middlewares";
import { insertStudentTeamMd } from "../teams/teams";

export const readReportAllMd = async (ctx, next) => {
  const { skip, limit } = ctx.state.query;
  const { classCode } = ctx.params;
  const { dbPool } = ctx;
  const conn = await dbPool.getConnection();
  let sql =
    "select at.id, t.name, at.file "
    + "from tb_assignment_team at "
    + "JOIN tb_team t ON at.team_id = t.id "
    + "WHERE t.class_code = ? AND at.file IS NOT NULL LIMIT ?, ?";
  const rows = await conn.query(sql, [classCode, skip, limit]);
  // sql =
  // "select t.id AS team_id, m.name, m.department "
  // + "FROM tb_member m "
  // + "JOIN tb_team_member tm ON m.id = tm.member_id "
  // + "JOIN tb_team t ON tm.team_id = t.id";

  // const members = await conn.query(sql);
  // for (let i = 0; i<rows.length; i+=1) {
  //   const t = await conn.query(sql, [rows[i].team_id]);
  //   rows[i].team = t;
  // }
  // for (let i=0; i<rows.length; i+=1) {
  //   const t = members.filter((item)=> {if(rows[i].team_id===item.team_id) return true;});
  //   rows[i].team = t;
  // }

  ctx.state.conn = conn;
  ctx.state.params = { classCode };
  ctx.state.body = {
    results: rows,
  };

  await next();
};

export const readReportAllCountMd = async (ctx, next) => {
  const { skip, limit } = ctx.state.query;
  const { classCode } = ctx.state.params;
  const conn = ctx.state.conn;

  const sql =
    "select COUNT(*) AS count "
    + "from tb_assignment_team at "
    + "JOIN tb_team t ON at.team_id = t.id "
    + "WHERE t.class_code = ? AND at.file IS NOT NULL LIMIT ?, ?";
  const rows = await conn.query(sql, [classCode, skip, limit]);

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
