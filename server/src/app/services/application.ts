import { Repository } from "typeorm";

import { AppDataSource } from "../../data-source";
import { Application } from "../entities";
import { ApplicationRequest } from "../constants/interfaces";

const applicationRepository: Repository<Application> =
  AppDataSource.getRepository(Application);

const getAll = async (): Promise<Application[]> => {
  const applications: Application[] = await applicationRepository.find({
    relations: {
      vacancy: true,
    },
  });

  return applications;
};

const apply = async (
  newApplicationData: ApplicationRequest
): Promise<Application> => {
  const application: Application = new Application();
  application.vacancy = newApplicationData.vacancy;
  application.email = newApplicationData.email;

  const newApplication: Application = await applicationRepository.save(
    application
  );

  return newApplication;
};

export { getAll, apply };
