import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  BeforeInsert, 
  BeforeUpdate, 
  BaseEntity,
  UpdateDateColumn,
  CreateDateColumn
 } from 'typeorm';
import { IsEmail, Length } from 'class-validator';
import bcrypt from "bcryptjs";

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Length(5, 20)
  @Column("varchar", { length: 255 })
  name: string;
  
  @Length(5, 40)
  @Column("varchar", { length: 255 })
  @IsEmail()
  email: string;
  
  @Column("varchar", { length: 255 })
  password: string;
  
  @Length(5, 30)
  @Column("varchar", { length: 255 })
  profile_status: string;
  
  @Length(5, 30)
  @Column("varchar", { length: 255 })
  profile_image: string;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updated_at: Date;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }
}