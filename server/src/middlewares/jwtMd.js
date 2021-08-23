import jwt from "jsonwebtoken";
import config from "../config";

const jwtSecret = config.JWT_SECRET;

export const generateToken = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      jwtSecret,
      {
        expiresIn: "2h",
      },
      (error, token) => {
        if (error) reject(error);
        resolve(token);
      }
    );
  });
};

function decodeToken(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, jwtSecret, (error, decoded) => {
      if (error) reject(error);
      resolve(decoded);
    });
  });
}

const jwtMd = async (ctx, next) => {
  const token = ctx.cookies.get("access_token");

  if (!token) return next();

  try {
    const decoded = await decodeToken(token);

    if (Date.now() / 1000 - decoded.iat > 60 * 60 * 24) {
      // 하루가 지나면 갱신해준다.
      const { id, name } = decoded;
      const freshToken = await generateToken({ id, name });
      ctx.cookies.set("access_token", freshToken, {
        maxAge: 1000 * 60 * 60 * 2,
        httpOnly: true,
      });
    }
    ctx.state.user = decoded;
  } catch (err) {
    ctx.state.user = null;
  }
  await next();
};

export default jwtMd;
