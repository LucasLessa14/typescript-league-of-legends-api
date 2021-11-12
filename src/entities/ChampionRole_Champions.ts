import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, PrimaryColumn } from "typeorm";
import { ChampionRoles } from "./ChampionRoles";
import { Champions } from "./Champions";
import { v4 as uuid } from "uuid";

@Entity('ChampionRoles_Champions')
class ChampionRoles_Champions {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    champion_id: string;

    @JoinColumn({ name: "champion_id" })
    @ManyToMany(() => Champions)
    champion: Champions;

    @Column()
    championRole_id: string;

    @JoinColumn({ name: "championRole_id" })
    @ManyToMany(() => ChampionRoles)
    championRole: ChampionRoles;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { ChampionRoles_Champions };