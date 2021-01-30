import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  BaseEntity,
  ManyToOne,
  JoinColumn
 } from 'typeorm';
 import { User } from "./User";
 import { Message } from "./Message";
 import { Group } from "./Group";

@Entity('messages_groups')
export class MessageGroup extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_sender_id: number;

  @Column()
  group_id: number;
  
  @Column()
  message_id: number;

  @Column()
  send_date: Date;

  @ManyToOne(() => User, user => user.messageGroup)
  @JoinColumn({ name: 'user_sender_id' })
  user!: User;
  
  @ManyToOne(() => Group, group => group.messageGroup)
  @JoinColumn({ name: 'group_id' })
  group!: Group;

  @ManyToOne(() => Message, message => message.messageGroup)
  @JoinColumn({ name: 'message_id' })
  message!: Message;

}