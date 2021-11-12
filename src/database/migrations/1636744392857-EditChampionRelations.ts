import { TableColumn, Table, MigrationInterface, QueryRunner} from "typeorm";

export class EditChampionRelations1636744392857 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumns('champion', ['lane', 'role']);

        await queryRunner.createTable(new Table({
            name: 'champion_lane',
            columns: [{
                name: 'champion_championLane_id',
                type: 'uuid',
                isPrimary: true,
            },{
                name: 'champion_id',
                type: 'uuid',
            },{
                name: 'championLane_id',
                type: 'uuid',
            },{
                name: 'created_at',
                type: 'timestamp',
                default: 'now()',
            }],
            foreignKeys: [{
                name: 'fk_champion',
                referencedTableName: 'champion',
                referencedColumnNames: ['id'],
                columnNames: ['champion_id'],
                onDelete: 'SET NULL',
                onUpdate: 'SET NULL',
            },{
                name: 'fk_championLane',
                referencedTableName: 'champion_lanes',
                referencedColumnNames: ['id'],
                columnNames: ['championLane_id'],
                onDelete: 'SET NULL',
                onUpdate: 'SET NULL',
            }],
        }));

        await queryRunner.createTable(new Table({
            name: 'champion_role',
            columns: [{
                name: 'champion_championRole_id',
                type: 'uuid',
                isPrimary: true,
            },{
                name: 'champion_id',
                type: 'uuid',
            },{
                name: 'championRole_id',
                type: 'uuid',
            },{
                name: 'created_at',
                type: 'timestamp',
                default: 'now()',
            }],
            foreignKeys: [{
                name: 'fk_champion',
                referencedTableName: 'champion',
                referencedColumnNames: ['id'],
                columnNames: ['champion_id'],
                onDelete: 'SET NULL',
                onUpdate: 'SET NULL',
            },{
                name: 'fk_championRole',
                referencedTableName: 'champion_role',
                referencedColumnNames: ['id'],
                columnNames: ['championRole_id'],
                onDelete: 'SET NULL',
                onUpdate: 'SET NULL',
            }],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns('champion', [
            new TableColumn({
                name: 'lane',
                type: 'varchar',
            }),
            new TableColumn({
                name: 'role',
                type: 'varchar',
            }),
        ]);

        await queryRunner.dropTable('champion_lane');

        await queryRunner.dropTable('champion_role');
    }
}