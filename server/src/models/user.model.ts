import bcrypt from "bcryptjs";

import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  uId: string;

  @Column({ length: 30 })
  firstName: string;

  @Column({ length: 30 })
  lastName: string;

  @Column({ length: 40, unique: true })
  email: string;

  @Column({ select: false })
  password: string;

  @Column({ default: true, select: false })
  state: boolean;

  @Column({ default: false, select: false })
  isAdmin: boolean;

  @Column({ default: true, select: false })
  isUser: boolean;

  @CreateDateColumn({ update: false, select: false })
  createdAt: Date;

  @UpdateDateColumn({ select: false })
  updatedAt: Date;

  @Column({ nullable: true, select: false })
  resetToken: string;

  hashPassword(password: string): string {
    const salt = bcrypt.genSaltSync(15);
    return (this.password = bcrypt.hashSync(password, salt));
  }

  comparePassword(password: string): boolean {
    return bcrypt.compareSync(password, this.password);
  }
}
