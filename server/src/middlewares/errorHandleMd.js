const errorHandleMd = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    if (err.isBoom) {
      ctx.status = err.output.statusCode;
      ctx.body = {
        error: err.output.payload.error,
        message: err.output.payload.message,
      };
    } else {
      ctx.status = 500;
      ctx.body = {
        error: "internal serveer error",
        message: "internal server error",
      };
    }
  }
};

export default errorHandleMd;
