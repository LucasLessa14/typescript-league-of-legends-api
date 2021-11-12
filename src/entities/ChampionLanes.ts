import { Column, CreateDateColumn, UpdateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity('ChampionLanes')
class ChampionLanes {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor(){
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { ChampionLanes };