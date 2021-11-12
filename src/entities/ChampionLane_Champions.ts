import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, PrimaryColumn } from "typeorm";
import { ChampionLanes } from "./ChampionLanes";
import { Champions } from "./Champions";
import { v4 as uuid } from "uuid";

@Entity('ChampionLanes_Champions')
class ChampionLanes_Champions {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    champion_id: string;

    @JoinColumn({ name: "champion_id" })
    @ManyToMany(() => Champions)
    champion: Champions;

    @Column()
    championLane_id: string;

    @JoinColumn({ name: "championLane_id" })
    @ManyToMany(() => ChampionLanes)
    championLane: ChampionLanes;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { ChampionLanes_Champions };