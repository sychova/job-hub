import { Entity, Column, OneToMany } from "typeorm";

import Base from "./base";
import Application from "./application";

@Entity("vacancies")
export default class Vacancy extends Base {
  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ default: "" })
  logo: string;

  @OneToMany(() => Application, (application) => application.vacancy)
  applications: Application[];
}
