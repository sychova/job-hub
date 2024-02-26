import { Entity, Column, ManyToOne } from "typeorm";

import Base from "./base";
import Vacancy from "./vacancy";

@Entity("applications")
export default class Application extends Base {
  @Column()
  email: string;

  @ManyToOne(() => Vacancy, (vacancy) => vacancy.applications)
  vacancy: Vacancy;
}
