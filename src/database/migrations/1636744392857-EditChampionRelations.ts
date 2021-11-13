import { TableColumn, Table, MigrationInterface, QueryRunner} from "typeorm";

export class EditChampionRelations1636744392857 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.createTable(new Table({
            name: 'champions_champion_lane',
            columns: [{
                name: 'champion_championLane_id',
                type: 'varchar',
                isPrimary: true,
            },{
                name: 'champion_id',
                type: 'varchar',
            },{
                name: 'championLane_id',
                type: 'varchar',
            },{
                name: 'created_at',
                type: 'timestamp',
                default: 'now()',
            }],
            foreignKeys: [{
                name: 'fk_champions_championLane',
                referencedTableName: 'champions',
                referencedColumnNames: ['id'],
                columnNames: ['champion_id'],
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            },{
                name: 'fk_championLane',
                referencedTableName: 'champion_lanes',
                referencedColumnNames: ['id'],
                columnNames: ['championLane_id'],
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }],
        }));
        
        await queryRunner.createTable(new Table({
            name: 'champions_champion_role',
            columns: [{
                name: 'champion_championRole_id',
                type: 'varchar',
                isPrimary: true,
            },{
                name: 'champion_id',
                type: 'varchar',
            },{
                name: 'championRole_id',
                type: 'varchar',
            },{
                name: 'created_at',
                type: 'timestamp',
                default: 'now()',
            }],
            foreignKeys: [{
                name: 'fk_champions_championRole',
                referencedTableName: 'champions',
                referencedColumnNames: ['id'],
                columnNames: ['champion_id'],
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            },{
                name: 'fk_championRole',
                referencedTableName: 'champion_roles',
                referencedColumnNames: ['id'],
                columnNames: ['championRole_id'],
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }],
        }));
        
        await queryRunner.dropColumns('champions', ['lane', 'role']);
    }
    
    public async down(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.dropTable('champions_champion_lane');
        await queryRunner.dropTable('champions_champion_role');

        await queryRunner.addColumns('champions', [
            new TableColumn({
                name: 'lane',
                type: 'varchar',
            }),
            new TableColumn({
                name: 'role',
                type: 'varchar',
            }),
        ]);
    }
}