import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateChampions1636552937176 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'champions',
            columns: [{
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                },{
                    name: 'name',
                    type: 'varchar',
                },{
                    name: 'lane',
                    type: 'varchar',
                },{
                    name: 'role',
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
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('champions');
    }

}
