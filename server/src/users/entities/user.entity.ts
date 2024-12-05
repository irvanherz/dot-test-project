import { AutoMap } from '@automapper/classes';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum UserRole {
  SUPER = 'super',
  ADMIN = 'admin',
  USER = 'user',
}

@Entity()
export class User {
  @AutoMap()
  @PrimaryGeneratedColumn()
  id: number;

  @AutoMap()
  @Column({ type: 'varchar', length: 255, unique: true })
  username: string;

  @AutoMap()
  @Column({ type: 'varchar', length: 255 })
  fullName: string;

  @AutoMap()
  @Column({ type: 'varchar', length: 255 })
  password: string;

  @AutoMap()
  @Column({ default: UserRole.USER })
  role: UserRole = UserRole.USER;

  @AutoMap()
  @CreateDateColumn()
  createdAt: Date;

  @AutoMap()
  @UpdateDateColumn()
  updatedAt: Date;
}
