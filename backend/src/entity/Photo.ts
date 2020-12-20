import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Photo {

    @PrimaryGeneratedColumn()
    id!: Number;

    @Column()
    name!: String;

    @Column()
    description!: String;

    @Column()
    filename!: String;

    @Column()
    views!: Number;

    @Column()
    isPublished!: Boolean;
}