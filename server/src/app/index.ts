import express, { Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { createDatabase } from "typeorm-extension";

import { ormconfig, AppDataSource } from "../data-source";
import { vacanciesRouter, applicationsRouter } from "./routes";

dotenv.config();

const app: Application = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

(async () => {
  await createDatabase({
    options: ormconfig,
    ifNotExist: true,
  });

  AppDataSource.initialize()
    .then(async () => {
      console.log("Db initialized!");
    })
    .catch((error) => {
      console.error("Error during db initialization", error);
    });
})();

app.use("/vacancies", vacanciesRouter);
app.use("/applications", applicationsRouter);

const port: number = Number(process.env.PORT) || 5000;
app.listen(port, () => {
  console.log(`Server is at http://localhost:${port}`);
});
