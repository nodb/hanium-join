/* eslint-disable no-multi-str */
import Boom from "@hapi/boom";
import * as CommonMd from "../middlewares";
import fs from "fs";
import path from "path";
import mime from "mime-types";

export const downloadMd = async (ctx, next) => {
  const { fileName } = ctx.params;

  console.log(fileName);
  var filePath = path.join(__dirname, "../../../upload");
  const pathFile = filePath + "\\" + fileName;
  var mimeType = mime.lookup(filePath + fileName);
  const body = await fs.createReadStream(pathFile);
  ctx.response.set("Content-type", mimeType);
  //   ctx.response.set("Content-disposition", `attachment; filename=${fileName}`);

  ctx.state.body = body;

  await next();
};

export const create = [downloadMd, CommonMd.responseMd];
