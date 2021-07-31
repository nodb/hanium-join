export const get = async (ctx, next) => {
  ctx.state = 200;
  ctx.body = "GET";
  // await next();
};

export const responseMiddleware = async (ctx, next) => {
  const { id } = ctx.params;
  const { method } = ctx.state;
  const data = ctx.request.body;

  ctx.state = 200;
  ctx.body = {
    id,
    method,
    data,
  };
};

export const post = async (ctx, next) => {
  ctx.state.method = "POST";

  await next();
};

export const put = async (ctx, next) => {
  ctx.state.method = "PUT";

  await next();
};

export const remove = async (ctx, next) => {
  ctx.state.method = "REMOVE";

  await next();
};
