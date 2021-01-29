import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  BaseEntity,
  UpdateDateColumn,
  CreateDateColumn,
 } from 'typeorm';
import { Length } from 'class-validator';
export type typeMessage = 'text' | 'attachment';

@Entity('messages')
export class Group extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  body: string;

  @Column({
    type: 'enum',
    enum: ['text', 'attachment'],
  })
  type: typeMessage;
  
  @Length(5, 30)
  @Column()
  image: string;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updated_at: Date;
}