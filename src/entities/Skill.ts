import { Entity, CreateDateColumn, UpdateDateColumn, Column, PrimaryColumn, JoinColumn, ManyToOne, Unique } from "typeorm";
import { Champions } from "./Champions";
import { v4 as uuidv4 } from "uuid";

@Entity('skills')
class Skill {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    slug: string;

    @Column()
    cooldown: string;

    @Column()
    cost: string;

    @Column()
    range: string;

    @Column({ length: 1000 })
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
        if (!this.id) this.id = uuidv4();
    }
}

export { Skill };