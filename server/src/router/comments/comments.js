import Boom from "@hapi/boom";
import * as CommonMd from "../middlewares";

export const createCommentMd = async (ctx, next) => {

    const {memberId, assignmentId, contents} =ctx.request.body;
    const {dbPool} = ctx;
    
    const conn = await dbPool.getConnection();
    await conn.query("INSERT INTO tb_comment(id, contents, tb_member_id, tb_assignment_id) VALUES (?,?,?,?)",
    [UUID(), contents, memberId, assignmentId]);

    await next();
}

export const readCommentAllMd = async (ctx, next) => {

    const { skip, limit } = ctx.state.query;
    const { assignmentId } = ctx.params;
    const {dbPool} = ctx;

    const conn = await dbPool.getConnection();
    const rows = await conn.query(
        "SELECT C.id, C.cotents, M.id FROM tb_comment C JOIN tb_member M ON C.tb_memeber_id = M.id WHERE id=? LIMIT ?, ?",
        [assignmentId, skip, limit]
    );

    ctx.state.body = {
        results: rows,
      };
    
    await next();
}

export const readCommentAllCountMd = async (ctx, next) => {

    const { dbPool } = ctx;
    const conn = await dbPool.getConnection();
    const rows = await conn.query("SELECT COUNT(*) AS count  FROM tb_comment");
  
    ctx.state.body = {
      ...ctx.state.body,
      total: rows[0].count,
    };
  
    await next();
}

export const removeCommentMd = async (ctx, next) => {

    const { conn } = ctx.state;
    const { id } = ctx.params;

    await conn.query("DELETE FROM td_comment WHERE id = ?", [id]);
    await next();
}

export const create = [CommonMd.validateIdParamMd, createCommentMd, CommonMd.responseMd];

export const readAll = [CommonMd.validateIdParamMd, readCommentAllMd, readCommentAllCountMd, CommonMd.responseMd];

export const remove = [CommonMd.validateIdParamMd, removeCommentMd, CommonMd.responseMd];
