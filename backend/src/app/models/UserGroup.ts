import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  BaseEntity,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn
 } from 'typeorm';
 import { User } from "./User";
 import { Group } from "./Group";

@Entity('users_groups')
export class UserGroup extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;
  
  @Column()
  group_id: number;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updated_at: Date;

  @ManyToOne(() => User, user => user.userGroup)
  @JoinColumn({ name: 'user_id' })
  user!: User;
  
  @ManyToOne(() => Group, group => group.userGroup)
  @JoinColumn({ name: 'group_id' })
  group!: Group;

}