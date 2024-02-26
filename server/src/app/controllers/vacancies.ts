import { Request, Response } from "express";
// import { vacancyService } from "../services";

const vacanciesStub = [{ id: 0, title: "Title", description: "Description" }];

const getAll = async (req: Request, res: Response) => {
  try {
    // const vacancies = await vacancyService.getAll();

    res.json(vacanciesStub);
  } catch (error) {
    console.error(error);
  }
};

export { getAll };
