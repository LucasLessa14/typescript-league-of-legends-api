import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateChampionLanes1636635709808 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'champion_lanes',
            columns: [{
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                },{
                    name: 'name',
                    type: 'varchar',
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('champion_lanes');
    }

}
