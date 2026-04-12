import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

const nanoId = require("nanoid")

@Entity()
export class File {
    @PrimaryGeneratedColumn()
    id!: string

    @Column()
    name!: string;

    @Column()
    url!: string; 

    @Column()
    type!: string; 

    @Column()
    size!: number; 

    @CreateDateColumn()
    createdAt!: Date; 

    generateId(){
        this.id = `file_${nanoId()}`
    }
}
