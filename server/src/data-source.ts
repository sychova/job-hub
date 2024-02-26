import "reflect-metadata";
import { DataSourceOptions, DataSource } from "typeorm";
// import { PG_DB, PG_HOST, PG_PASS, PG_USER } from "./envs";

const ormconfig: DataSourceOptions = {
  name: "default",
  type: "postgres",
  host: "localhost",
  username: "postgres",
  password: "admin",
  database: "job-hub",
  synchronize: false,
  logging: false,
  entities: ["./src/app/entities/*.{js,ts}"],
  migrations: ["./src/migrations/*.{js,ts}"],
  subscribers: [],
};

const AppDataSource = new DataSource(ormconfig);

export { ormconfig, AppDataSource };
