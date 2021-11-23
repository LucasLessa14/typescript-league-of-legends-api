import { Column, CreateDateColumn, UpdateDateColumn, Entity, PrimaryColumn, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { ChampionPassive } from "./ChampionPassive";
import { v4 as uuid } from "uuid";
import { Skill } from "./Skill";

@Entity('champions')
class Champions {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    slug: string;

    @Column()
    role: string;

    @Column()
    lane: string;

    @OneToOne(() => ChampionPassive)
    @JoinColumn()  
    passive: ChampionPassive;

    @OneToMany(() => Skill, skill => skill.champion)
    @JoinColumn()
    skills: Skill[];

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