import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialCreate1747198853016 implements MigrationInterface {
    name = 'InitialCreate1747198853016'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "lead" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "mobile" character varying NOT NULL, "postcode" character varying NOT NULL, CONSTRAINT "PK_ca96c1888f7dcfccab72b72fffa" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "lead"`);
    }

}
