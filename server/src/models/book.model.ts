import {
    Column,
    Entity,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Book extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    uId: string;

    @Column({ length: 50 })
    title: string;

    @Column("text")
    description: string;

    @Column("text")
    author: string;

    @Column("text")
    genre: string;

    @Column({ type: "simple-json" })
    cover: { public_id: string, secure_url: string; };

    @Column({ type: "int", default: 0 })
    stock: number;

    @Column({ type: "double precision", default: 0.00 })
    price: number;

    @CreateDateColumn({ update: false, select: false })
    createdAt: Date;

    @UpdateDateColumn({ select: false })
    updatedAt: Date;

}
