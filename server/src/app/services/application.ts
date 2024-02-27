import { AppDataSource } from "../../data-source";
import { Application } from "../entities";

const applicationRepository = AppDataSource.getRepository(Application);

const getAll = async () => {
  const applications = await applicationRepository.find({
    relations: {
      vacancy: true,
    },
  });

  return applications;
};

const apply = async (newApplicationData: any) => {
  const application = new Application();
  application.vacancy = newApplicationData.vacancy;
  application.email = newApplicationData.email;

  const newApplication = await applicationRepository.save(application);

  return newApplication;
};

export { getAll, apply };
