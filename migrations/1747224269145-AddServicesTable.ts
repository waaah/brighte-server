import { MigrationInterface, QueryRunner } from "typeorm";

export class AddServicesTable1747224269145 implements MigrationInterface {
    name = 'AddServicesTable1747224269145'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "service" ("id" SERIAL NOT NULL, "name" integer NOT NULL, "leadId" integer NOT NULL, CONSTRAINT "PK_85a21558c006647cd76fdce044b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "service" ADD CONSTRAINT "FK_d6c20a345e32898de70992c3893" FOREIGN KEY ("leadId") REFERENCES "lead"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "service" DROP CONSTRAINT "FK_d6c20a345e32898de70992c3893"`);
        await queryRunner.query(`DROP TABLE "service"`);
    }

}
