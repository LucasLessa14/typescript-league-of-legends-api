import { Entity, CreateDateColumn, UpdateDateColumn, Column, PrimaryColumn, JoinColumn, ManyToOne } from "typeorm";
import { Champions } from "./Champions";
import { v4 as uuid } from "uuid";

@Entity('skills')
class Skill {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    cooldown: string;

    @Column()
    cust: string;

    @Column()
    range: string;

    @Column()
    description: string;

    @Column()
    letter: string;

    @Column()
    urlImageSkill: string;

    @ManyToOne(() => Champions, champion => champion.skills)
    @JoinColumn()  
    champion: Champions;

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

export { Skill };