import { MigrationInterface, QueryRunner } from "typeorm";

export class SeedDefaultVacancies1708993750574 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO vacancies (title, description, logo) VALUES ('Node.js developer', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'https://i.pravatar.cc/350?u=node')`
    );
    await queryRunner.query(
      `INSERT INTO vacancies (title, description, logo) VALUES ('TypeScript developer', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'https://i.pravatar.cc/350?u=typescript')`
    );
    await queryRunner.query(
      `INSERT INTO vacancies (title, description, logo) VALUES ('JavaScript developer', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'https://i.pravatar.cc/350?u=javascript')`
    );
    await queryRunner.query(
      `INSERT INTO vacancies (title, description, logo) VALUES ('React developer', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'https://i.pravatar.cc/350?u=fereact')`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM guild WHERE name = 'Default'`);
    await queryRunner.query(
      `DELETE FROM guild WHERE name = 'TypeScript developer'`
    );
    await queryRunner.query(
      `DELETE FROM guild WHERE name = 'JavaScript developer'`
    );
    await queryRunner.query(`DELETE FROM guild WHERE name = 'React developer'`);
  }
}
