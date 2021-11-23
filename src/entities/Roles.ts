import { Column, CreateDateColumn, UpdateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity('roles')
class Roles {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    slug: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}

export { Roles };