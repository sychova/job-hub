import { AppDataSource } from "../../data-source";
import { Vacancy } from "../entities";

const vacancyRepository = AppDataSource.getRepository(Vacancy);

const getAll = async () => {
  const vacancies = await vacancyRepository.find({
    relations: {
      applications: true,
    },
  });

  return vacancies;
};

export { getAll };
