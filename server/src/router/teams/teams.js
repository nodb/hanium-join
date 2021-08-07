import * as CommonMd from "../middlewares";

export const saveTeamMd = async (ctx, next) => {
    const {  }
};

export const readTeamAllMd = async (ctx, next) => {
    const {dbPool} = ctx;
    const {classCode} = ctx.params;
    const conn = await dbPool.getConnection();
    await conn.query(
        "SELECT m.name, m.grade, m.department FROM tb_team t JOIN tb_team_student ts ON t.id = ts.tb_team_id JOIN tb_member m ON ts.tb_member_id = m.id LEFT JOIN tb_class c ON t.tb_class_code = c.code WHERE c.code = ?",
        [classCode]
    )

}

export const create = [
  validateDataMd,
  saveClassMd,
  queryClassMdByCode,
  CommonMd.responseMd,
];

export const readAll = [
    readTeamAllMd, 
    CommonMd.responseMd,
];
