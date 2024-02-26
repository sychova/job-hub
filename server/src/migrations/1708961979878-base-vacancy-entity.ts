import { MigrationInterface, QueryRunner } from "typeorm";

export class BaseVacancyEntity1708961979878 implements MigrationInterface {
    name = 'BaseVacancyEntity1708961979878'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "vacancy" ("id" SERIAL NOT NULL, "createdDate" TIMESTAMP NOT NULL DEFAULT now(), "updatedDate" TIMESTAMP NOT NULL DEFAULT now(), "deletedDate" TIMESTAMP, "title" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_8fa1981f63bc24e1712707d492b" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "vacancy"`);
    }

}
