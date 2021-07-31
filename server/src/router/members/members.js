import Boom from "@hapi/boom";

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

export const get = async (ctx, next) => {
  ctx.state = 200;
  ctx.body = "GET";
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

export const getDataFromBodyMd = async (ctx,next) => {
  const { email, password, name, type, mobile} = ctx.request.body;

  console.log(ctx.request.body);
  //state에 모든 데이터 저장
  ctx.state.reqBody = {
    email, password, name, type, mobile
  };

  await next();

}

export const validateDataMd = async (ctx, next) => {
  const {
    email, password, name, type, mobile
  } = ctx.state.reqBody;

  if (!email || !password || !type || !name) {
    throw Boom.badRequest();
  }

  await next();
}

export const isDubplicatedEmailMd = async (ctx, next)=> {
  const {email} = ctx.state.reqBody;
  const {dbPool} = ctx;

  const conn = await dbPool.getConnection();
	// const rows = await conn.query(``);
  const rows = await conn.query("SELECT * FROM td_member WHERE email = ?", [email])
  
  if (rows.length > 0){
    throw Boom.badRequest();
  }

  ctx.state.conn = conn;

  await next();
}

export const saveMemberMd = async (ctx, next) => {
  const [
    email, password, name, type, mobile,
  ] = ctx.state.reqBody;
  const {conn} = ctx.state;

  const rows = await conn.query("INSERT INTO td_member (email,name, password, type, mobile) VALUES (?,?,password(?),?,?)", 
  [email, name, password, type, mobile]);

  console.log(rows);
  
  await next();
}


export const create = [
  getDataFromBodyMd,
  validateDataMd,
  isDuplicatedEmailMd,
  saveMemberMd,
  // responseMiddleware
];