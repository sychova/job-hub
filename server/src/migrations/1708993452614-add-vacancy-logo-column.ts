import { MigrationInterface, QueryRunner } from "typeorm";

export class AddVacancyLogoColumn1708993452614 implements MigrationInterface {
    name = 'AddVacancyLogoColumn1708993452614'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vacancies" ADD "logo" character varying NOT NULL DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vacancies" DROP COLUMN "logo"`);
    }

}
