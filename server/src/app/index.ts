import express, { Request, Response, Application } from "express";
import dotenv from "dotenv";
import cors from "cors";

import vacanciesRouter from "./routes";

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

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world");
});

app.use("/vacancies", vacanciesRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is at http://localhost:${port}`);
});
