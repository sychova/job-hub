import { Request, Response } from "express";

import { vacancyService } from "../services";

const getAll = async (req: Request, res: Response) => {
  try {
    const vacancies = await vacancyService.getAll();

    res.json(vacancies);
  } catch (error) {
    console.error(error);
  }
};

// const create = async (req: Request, res: Response) => {}

export { getAll };
