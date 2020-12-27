import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  BeforeInsert, 
  BeforeUpdate, 
  BaseEntity,
 } from 'typeorm';
import {
  IsEmail,
  Length
} from 'class-validator';
import bcrypt from "bcryptjs";

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Length(5, 20)
  @Column('text')
  name: string;
  
  @Length(5, 40)
  @Column('text')
  @IsEmail()
  email: string;
  
  @Column('text')
  password: string;
  
  @Length(5, 30)
  @Column('text')
  profile_status: string;
  
  @Length(5, 30)
  @Column('text')
  profile_image: string;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }
}