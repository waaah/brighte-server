import "reflect-metadata";
import { DataSource } from "typeorm";
import { Lead } from "./schema/db/entity/Lead";
import config from "./config";
import { Service } from "./schema/db/entity/Service";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: config.dbConfig.HOST,
  port: config.dbConfig.PORT,
  username: config.dbConfig.USER,
  password: config.dbConfig.PASSWORD,
  database: config.dbConfig.DATABASE,
  logging: config.dbConfig.LOGGING,
  synchronize: false,
  entities: [Lead, Service],
  migrations: ["./migrations/*.ts"],
  subscribers: [],
});
