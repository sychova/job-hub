import { Request, Response } from "express";
import { lookup } from "geoip-lite";

import { applicationService } from "../services";

const getAll = async (req: Request, res: Response) => {
  try {
    const vacancies = await applicationService.getAll();

    res.json(vacancies);
  } catch (error) {
    console.error(error);
  }
};

const apply = async (req: Request, res: Response) => {
  try {
    // const ip: string | string[] | undefined =
    //   req.headers["x-forwarded-for"] || req.connection.remoteAddress;

    // // const ipBY = "37.214.42.99";
    // // const ipUS = "52.20.152.104";
    // // const ip = BY;

    // if (ip && typeof ip === "string" && lookup(ip)?.country !== "BY") {
    //   console.log("You're not allowed. You're not from Belarus.");
    // } else {
    //   console.log("You're allowed");
    // }

    if (!req.body.vacancy || !req.body.email) {
      return res.status(400).json({
        message: "Email is required to apply.",
      });
    }

    const newApplication = await applicationService.apply({
      vacancy: req.body.vacancy,
      email: req.body.email,
    });

    res.json(newApplication);
  } catch (error) {
    res.status(500).send(error);
  }
};

export { getAll, apply };
