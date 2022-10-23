import { assertIsDefined } from "../helper/assert";

// null または undefined の場合はランタイムエラーが発生させる
// https://zenn.dev/aktriver/articles/2022-04-nextjs-env#assertisdefined-%E3%82%92%E4%BD%BF%E3%81%86
assertIsDefined(process.env.PORT);
assertIsDefined(process.env.DB_PORT);

export default {
  /**
   * APIサーバーのPORT番号
   */
  port: parseInt(process.env.PORT, 10),
  /**
   * databaseの設定
   */
  db: {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    multipleStatements: true,
  },
};
