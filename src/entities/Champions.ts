import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("champions")
class Champions {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    lane: string;

    @Column()
    role: string;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}