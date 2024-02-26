import { Entity, Column, ManyToOne } from "typeorm";

import Base from "./base";
import Vacancy from "./vacancy";

@Entity()
export default class Application extends Base {
  @Column()
  title: string;

  @Column()
  email: string;

  @ManyToOne(() => Vacancy, (vacancy) => vacancy.applications)
  vacancy: Vacancy;
}
