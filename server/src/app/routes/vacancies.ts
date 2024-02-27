import express, { Router } from "express";

import { vacanciesController } from "../controllers";

const vacanciesRouter: Router = express.Router();

vacanciesRouter.get("/", vacanciesController.getAll);

export default vacanciesRouter;
