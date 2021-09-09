import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  BeforeInsert, 
  BeforeUpdate, 
  BaseEntity,
  UpdateDateColumn,
  CreateDateColumn,
  OneToMany
 } from 'typeorm';
import { IsEmail, Length } from 'class-validator';
import bcrypt from "bcryptjs";
import { Exception } from 'app/utilities';
import { UserGroup } from "./UserGroup";
import { MessageGroup } from "./MessageGroup";

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
  
  @Column({select: false})
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

  @OneToMany(() => UserGroup, userGroup => userGroup.user)
  userGroup!: UserGroup[];

  @OneToMany(() => MessageGroup, messageGroup => messageGroup.user)
  messageGroup!: MessageGroup[];

  @BeforeInsert()
  generateHashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }

  @BeforeInsert()
  @BeforeUpdate()
  validateName() {
    if(!(new RegExp(/^[a-z]{2,}\ [a-z]{2,}/gi).test(this.name))) {
      throw new Exception("Informe o seu nome e sobrenome", 400);
    }
  }

  @BeforeInsert()
  @BeforeUpdate()
  capitalizeName() {
    const splitName = this.name.split(' ');

    for (let index = 0; index < splitName.length; index++) {
      const capitalized = splitName[index].charAt(0).toUpperCase() + String(splitName[index].slice(1));
      splitName[index] = capitalized;
    }
    this.name = splitName.join(' ');
  }

}