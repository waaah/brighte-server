import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterServicesTable1747226139821 implements MigrationInterface {
    name = 'AlterServicesTable1747226139821'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "service" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "service" ADD "name" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "service" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "service" ADD "name" integer NOT NULL`);
    }

}
