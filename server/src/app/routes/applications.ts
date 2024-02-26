import express, { Router } from "express";

import { applicationsController } from "../controllers";

const applicationsRouter: Router = express.Router();

applicationsRouter.get("/", applicationsController.getAll);

applicationsRouter.post("/", applicationsController.apply);

export default applicationsRouter;
