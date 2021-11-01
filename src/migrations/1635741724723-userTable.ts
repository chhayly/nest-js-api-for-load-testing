import {MigrationInterface, QueryRunner} from "typeorm";

export class userTable1635741724723 implements MigrationInterface {
    name = 'userTable1635741724723'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "field1" character varying(150) NOT NULL, "field2" character varying(150) NOT NULL, "field3" character varying(150) NOT NULL, "field4" character varying(150) NOT NULL, "field5" character varying(150) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_1ddacaa8254c0e64a0be295a2c" ON "user" ("field1") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_0082bf3363167207f7699d09e3" ON "user" ("field2") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_3a0519e370d6192171615d4c00" ON "user" ("field3") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_f59a706ddf88a18a4c60e1e860" ON "user" ("field4") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_2aea6a3ba20097c5eb409053e7" ON "user" ("field5") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_2aea6a3ba20097c5eb409053e7"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f59a706ddf88a18a4c60e1e860"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_3a0519e370d6192171615d4c00"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_0082bf3363167207f7699d09e3"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_1ddacaa8254c0e64a0be295a2c"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
