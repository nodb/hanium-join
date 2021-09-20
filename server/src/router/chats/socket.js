import { Server } from "socket.io";
import * as chats from "./chats";

const socketMd = async (ctx, next) => {
  const { server } = ctx;

  const io = new Server(server, {
    path: "/socket.io",
    cors: {
      origin: true,
      methods: ["GET", "POST"],
    },
    transport: { webSocket: true },
  });
  ctx.state.io = io;
  io.of(/^\/.+/).on("connection", (socket) => {
    const newNamespace = socket.nsp;
    console.log("소켓 연결 성공");
    console.log(socket.nsp.name);

    socket.on("join", async ({ roomId, user }) => {
      console.log("다른 유저 접속 성공");

      // const response = await RoomUserRepository.findOneByRoomAndUserId(
      //   parseInt(roomId, 10),
      //   parseInt(user.id, 10)
      // );

      // if (!response) {
      //   await RoomUserRepository.joinRoomUser(
      //     parseInt(roomId, 10),
      //     parseInt(user.id, 10)
      //   );
      // newNamespace.emit("joinUser", `${user.nickname} 님이 입장하셨습니다.`);
      // }
      newNamespace.emit("joinUser", "hi 님이 입장하셨습니다.");

      // const participantInfo = await RoomUserRepository.findManyByRoomId(
      //   parseInt(roomId, 10)
      // );

      // newNamespace.emit("RoomInfo", participantInfo);
    });

    socket.on("disconnect", () => {
      console.log("소켓 연결 종료");
    });
  });
  await next();
};

export default socketMd;
