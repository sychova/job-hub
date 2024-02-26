import express, { Router, Request, Response } from "express";

import { vacanciesController } from "../controllers";

const vacanciesRouter: Router = express.Router();

vacanciesRouter.get("/", vacanciesController.getAll);

// vacanciesRouter.post("/", vacanciesController.create);
vacanciesRouter.get("/apply", vacanciesController.apply);

export default vacanciesRouter;
