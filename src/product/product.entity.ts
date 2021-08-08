import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { Order } from '../order/order.entity';

@Entity()
export class Product {
    @PrimaryGeneratedColumn("increment")
    product_id: number;

    @Column()
    title: string;

    @OneToMany(type => Order, order => order.product)
    orders: Order[];
}