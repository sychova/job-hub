import express, { Router, Request, Response } from "express";

// import { vacancyController } from "../controllers";

const vacanciesRouter: Router = express.Router();

vacanciesRouter.get("/", (req: Request, res: Response) => {
  res.send("Hello vacancies");
});

export default vacanciesRouter;
