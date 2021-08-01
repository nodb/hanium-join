import Boom from "@hapi/boom";
import * as CommonMd from "../middlewares";

export const readEnrolSubMd = async (ctx, next) => {
  const { dbPool } = ctx;
  const { classId } = ctx.params;
  const conn = await dbPool.getConnection();
  const sql =
    // eslint-disable-next-line max-len
    "SELECT m.name, m.department, m.grade FROM tb_member m JOIN tb_enrol e ON m.id = e.member_id WHERE e.isAccept=0 AND e.class_id = ?";
  const rows = await conn.query(sql, [classId]);

  console.log(rows);

  ctx.state.body = {
    results: rows,
  };
  await next();
};

export const readEnrolListMd = async (ctx, next) => {
  const { dbPool } = ctx;
  const { classId } = ctx.params;
  const conn = await dbPool.getConnection();
  const sql =
    // eslint-disable-next-line max-len
    "SELECT m.name, m.department, m.grade FROM tb_member m JOIN tb_enrol e ON m.id = e.member_id WHERE e.isAccept=1 AND e.class_id = ?";
  const rows = await conn.query(sql, [classId]);

  console.log(rows);

  ctx.state.body = {
    results: rows,
  };
  await next();
};

export const saveEnrolMd = async (ctx, next) => {
  const { memberId, classId } = ctx.request.body;
  const { dbPool } = ctx;

  const conn = await dbPool.getConnection();
  await conn.query(
    "INSERT INTO tb_enrol(member_id, class_id, isAccept) VALUES (?, ?, ?)",
    [memberId, classId, 0]
  );
  ctx.state.conn = conn;
  await next();
};

export const queryEnrolMdByClassId = async (ctx, next) => {
  const { classId } = ctx.request.body;
  const { conn } = ctx.state;
  const rows = await conn.query(
    "SELECT member_id, class_id, isAccept FROM tb_enrol WHERE class_id = ?",
    [classId]
  );

  ctx.state.body = {
    ...rows[0],
  };

  await next();
};

export const create = [saveEnrolMd, queryEnrolMdByClassId, CommonMd.responseMd];

export const readSubList = [readEnrolSubMd, CommonMd.responseMd];

export const readCompleteList = [readEnrolListMd, CommonMd.responseMd];
