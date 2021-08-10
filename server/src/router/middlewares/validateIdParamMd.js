const validateIdParamMd = async (ctx, next) => {
  // eslint-disable-next-line no-unused-vars
  const { id } = ctx.params;

  // 1. email 형식에 맞는지 확인?

  // const { dbPool } = ctx;

  // const conn = await dbPool.getConnection();
  // const rows = await conn.query("SELECT * FROM tb_member WHERE email = ?", [
  //   email,
  // ]);

  // if (rows.length === 0) {
  //   throw Boom.badRequest();
  // }

  // ctx.state.conn = conn;

  await next();
};

export default validateIdParamMd;
