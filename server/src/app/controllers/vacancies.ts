import { Request, Response } from "express";

import { vacancyService } from "../services";
import { Vacancy } from "../entities";

const getAll = async (req: Request, res: Response): Promise<void> => {
  try {
    const vacancies: Vacancy[] = await vacancyService.getAll();

    res.json(vacancies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export { getAll };
