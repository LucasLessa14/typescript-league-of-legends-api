import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateChampionRole1636743666937 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'champion_roles',
            columns: [{
                    name: 'id',
                    type: 'uuid',
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
        await queryRunner.dropTable('champion_roles');
    }
}
