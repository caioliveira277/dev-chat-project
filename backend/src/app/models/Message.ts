import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  BaseEntity,
  UpdateDateColumn,
  CreateDateColumn,
  OneToMany
 } from 'typeorm';
import { MessageGroup } from './MessageGroup';
export type typeMessage = 'text' | 'attachment';

@Entity('messages')
export class Message extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  body: string;

  @Column({
    type: 'enum',
    enum: ['text', 'attachment'],
  })
  type: typeMessage;
  
  @CreateDateColumn({ type: 'timestamp with time zone' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updated_at: Date;

  @OneToMany(() => MessageGroup, messageGroup => messageGroup.message)
  messageGroup!: MessageGroup[];
}