import express, { Router, Request, Response } from "express";

import { vacanciesController } from "../controllers";

const vacanciesRouter: Router = express.Router();

vacanciesRouter.get("/", vacanciesController.getAll);

export default vacanciesRouter;
