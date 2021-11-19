import { Column, CreateDateColumn, UpdateDateColumn, Entity, PrimaryColumn, OneToOne, JoinColumn } from "typeorm";
import { ChampionPassive } from "./ChampionPassive";
import { v4 as uuid } from "uuid";

@Entity('champions')
class Champions {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    role: string;

    @Column()
    lane: string;

    @OneToOne(() => ChampionPassive)
    @JoinColumn()  
    passive: ChampionPassive;

    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { Champions };