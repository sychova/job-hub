import { Request, Response } from "express";
import { lookup } from "geoip-lite";

import { applicationService } from "../services";
import { Application } from "../entities";
import { AllowedCountriesEnum } from "../constants/enums/AllowedCountries";

const getAll = async (req: Request, res: Response): Promise<void> => {
  try {
    const applications: Application[] = await applicationService.getAll();

    res.json(applications);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const apply = async (req: Request, res: Response): Promise<void> => {
  try {
    const ip: string | string[] | undefined =
      req.headers["x-forwarded-for"] || req.connection.remoteAddress;

    // For testing
    // const ipBY = "37.214.42.99";
    // const ipUS = "52.20.152.104";
    // const ip = ipBY;

    let country: string;

    if (ip) {
      if (typeof ip === "string") {
        country = lookup(ip)!.country?.toString();
      }
      if (Array.isArray(ip)) {
        country = lookup(ip![0])!.country?.toString();
      }
    }

    const isCountryAllowed = Object.keys(AllowedCountriesEnum).includes(
      country!
    );

    if (ip && !isCountryAllowed) {
      res.json({
        error: "Sorry. Only users from Belarus can apply.",
      });
      return;
    }

    const newApplication: Application = await applicationService.apply({
      vacancy: req.body.vacancy,
      email: req.body.email,
    });

    res.json(newApplication);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export { getAll, apply };
