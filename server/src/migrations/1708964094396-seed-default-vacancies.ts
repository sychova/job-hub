import { MigrationInterface, QueryRunner } from "typeorm";

export class SeedDefaultVacancies1708964094396 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO vacancies (title, description) VALUES ('Node.js developer', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')`
    );
    await queryRunner.query(
      `INSERT INTO vacancies (title, description) VALUES ('TypeScript developer', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')`
    );
    await queryRunner.query(
      `INSERT INTO vacancies (title, description) VALUES ('JavaScript developer', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')`
    );
    await queryRunner.query(
      `INSERT INTO vacancies (title, description) VALUES ('React developer', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')`
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
