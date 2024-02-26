import { MigrationInterface, QueryRunner } from "typeorm";

export class ApplicationVacancyConnection1708962357334 implements MigrationInterface {
    name = 'ApplicationVacancyConnection1708962357334'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "application" ("id" SERIAL NOT NULL, "createdDate" TIMESTAMP NOT NULL DEFAULT now(), "updatedDate" TIMESTAMP NOT NULL DEFAULT now(), "deletedDate" TIMESTAMP, "title" character varying NOT NULL, "email" character varying NOT NULL, "vacancyId" integer, CONSTRAINT "PK_569e0c3e863ebdf5f2408ee1670" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vacancy" ("id" SERIAL NOT NULL, "createdDate" TIMESTAMP NOT NULL DEFAULT now(), "updatedDate" TIMESTAMP NOT NULL DEFAULT now(), "deletedDate" TIMESTAMP, "title" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_8fa1981f63bc24e1712707d492b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "application" ADD CONSTRAINT "FK_212bd5fedd50c7cb4c2082d214e" FOREIGN KEY ("vacancyId") REFERENCES "vacancy"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "application" DROP CONSTRAINT "FK_212bd5fedd50c7cb4c2082d214e"`);
        await queryRunner.query(`DROP TABLE "vacancy"`);
        await queryRunner.query(`DROP TABLE "application"`);
    }

}
