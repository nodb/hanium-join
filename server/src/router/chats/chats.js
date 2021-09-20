import Boom from "@hapi/boom";
import * as CommonMd from "../middlewares";
import { v4 as UUID } from "uuid";

export const createChatMd = async (ctx, next) => {
  const { conn, io } = ctx.state;
  const { memberId, assignmentTeamId, contents } = ctx.request.body;
  io.of(`/${assignmentTeamId}`).emit("message", contents);

  await conn.query(
    "INSERT INTO tb_chat(id, member_id, contents, assignment_team_id) VALUES (?, ?, ?, ?)",
    [UUID(), memberId, contents, assignmentTeamId]
  );

  await next();
};

export const create = [
  CommonMd.createConnectionMd,
  createChatMd,
  CommonMd.responseMd,
];
