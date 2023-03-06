import { constants } from "../constants";
import { getMetadataArgsStorage } from "typeorm";

export const appConfig = () => ({
  [constants.database]: {
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: getMetadataArgsStorage().tables.map((tbl) => tbl.target),
    synchronize: process.env.POSTGRES_SYNC === "true",
    timezone: "Z",
  },
  nonceTimeExpirationInMiliseconds: 120000,
});
