import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  BeforeInsert, 
  BeforeUpdate, 
  BaseEntity,
  UpdateDateColumn,
  CreateDateColumn,
 } from 'typeorm';
import { IsEmail, Length } from 'class-validator';
import bcrypt from "bcryptjs";
import { Exception } from '../utilities';

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Length(5, 20)
  @Column()
  name: string;
  
  @Length(5, 40)
  @IsEmail()
  @Column()
  email: string;
  
  @Column()
  password: string;
  
  @Length(5, 30)
  @Column()
  profile_status: string;
  
  @Length(5, 30)
  @Column()
  profile_image: string;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updated_at: Date;

  @BeforeInsert()
  @BeforeUpdate()
  validate() {
    this.password = bcrypt.hashSync(this.password, 8);
    if(!(new RegExp(/^[a-z]{2,}\ [a-z]{2,}/gi).test(this.name)))
      throw new Exception("Informe o seu nome e sobrenome", 400);
    
  }
}