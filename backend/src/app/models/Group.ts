import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  BaseEntity,
  UpdateDateColumn,
  CreateDateColumn,
  OneToMany
 } from 'typeorm';
import { Length } from 'class-validator';
import { UserGroup } from "./UserGroup";

@Entity('groups')
export class Group extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Length(5, 20)
  @Column()
  name: string;

  @Length(5, 100)
  @Column()
  description: string;
  
  @Length(5, 30)
  @Column()
  image: string;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updated_at: Date;

  @OneToMany(() => UserGroup, userGroup => userGroup.group)
  userGroup!: UserGroup[];
}