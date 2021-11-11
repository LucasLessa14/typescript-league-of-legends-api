import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity('ChampionLanes')
class ChampionLanes {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    lane: string;

    constructor(){
        if (!this.id) {
            this.id = uuid();
        }
        
    }
}

export { ChampionLanes };