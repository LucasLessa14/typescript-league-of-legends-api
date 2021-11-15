import { Table, MigrationInterface, QueryRunner } from "typeorm";

export class CreateChampionLane1636744346124 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'champion_lanes',
            columns: [{
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                },{
                    name: 'name',
                    type: 'varchar',
                },{
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                },{
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()',
                },
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('champion_lanes');
    }
}
