import { Vacancy } from "../../entities";

export default interface ApplicationRequest {
  vacancy: Vacancy;
  email: string;
}
