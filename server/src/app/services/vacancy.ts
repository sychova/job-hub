import { Repository } from "typeorm";

import { AppDataSource } from "../../data-source";
import { Vacancy } from "../entities";

const vacancyRepository: Repository<Vacancy> =
  AppDataSource.getRepository(Vacancy);

const getAll = async (): Promise<Vacancy[]> => {
  const vacancies: Vacancy[] = await vacancyRepository.find({
    relations: {
      applications: true,
    },
  });

  return vacancies;
};

export { getAll };
