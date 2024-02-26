import express, { Request, Response, Application } from "express";
import dotenv from "dotenv";
import vacanciesRouter from "./routes";

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world");
});

app.use("/vacancies", vacanciesRouter);

app.listen(port, () => {
  console.log(`Server is at http://localhost:${port}`);
});
