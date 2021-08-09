import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';
import { Product } from '../product/product.entity';

@Entity()
export class Order {
    @PrimaryGeneratedColumn("increment")
    order_id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    phone_number: string;

    @Column()
    product_id: number;

    /*@ManyToOne(type => User, user => user.orders)
    customer: User;*/

    @ManyToOne(type => Product, product => product.orders)
    @JoinColumn({ name: "product_id" })
    product: Product;
}