import { Request, Response } from "express";
import { lookup } from "geoip-lite";
import { vacancyService } from "../services";

const vacanciesStub = [{ id: 0, title: "Title", description: "Description" }];

const getAll = async (req: Request, res: Response) => {
  try {
    const vacancies = await vacancyService.getAll();

    res.json(vacancies);
  } catch (error) {
    console.error(error);
  }
};

// const create = async (req: Request, res: Response) => {}

const apply = async (req: Request, res: Response) => {
  try {
    const ip: string | string[] | undefined =
      req.headers["x-forwarded-for"] || req.connection.remoteAddress;

    // const ipBY = "37.214.42.99";
    // const ipUS = "52.20.152.104";
    // const ip = BY;

    if (ip && typeof ip === "string" && lookup(ip)?.country !== "BY") {
      console.log("You're not allowed. You're not from Belarus.");
    } else {
      console.log("You're allowed");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

export { getAll, apply };
