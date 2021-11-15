import {MigrationInterface, QueryRunner} from "typeorm";

export class CreatePassiveChampion1636989639544 implements MigrationInterface {
    name = 'CreatePassiveChampion1636989639544'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`ChampionLanes\` (\`id\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`champion_passive\` (\`id\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`urlImage\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`ChampionRoles\` (\`id\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Champions\` (\`id\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`passiveId\` varchar(255) NULL, UNIQUE INDEX \`REL_d628af77da85e2b94de1a4efdf\` (\`passiveId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`Champions\` ADD CONSTRAINT \`FK_d628af77da85e2b94de1a4efdfc\` FOREIGN KEY (\`passiveId\`) REFERENCES \`champion_passive\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Champions\` DROP FOREIGN KEY \`FK_d628af77da85e2b94de1a4efdfc\``);
        await queryRunner.query(`DROP INDEX \`REL_d628af77da85e2b94de1a4efdf\` ON \`Champions\``);
        await queryRunner.query(`DROP TABLE \`Champions\``);
        await queryRunner.query(`DROP TABLE \`ChampionRoles\``);
        await queryRunner.query(`DROP TABLE \`champion_passive\``);
        await queryRunner.query(`DROP TABLE \`ChampionLanes\``);
    }

}
