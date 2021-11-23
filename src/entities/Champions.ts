import { Column, CreateDateColumn, UpdateDateColumn, Entity, PrimaryColumn, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { Passive } from "./Passive";
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

    @OneToOne(() => Passive)
    @JoinColumn()  
    passive: Passive;

    @OneToMany(() => Skill, skill => skill.champion)
    @JoinColumn()
    skills: Skill[];

    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) this.id = uuidv4();
    }
}

export { Champions };