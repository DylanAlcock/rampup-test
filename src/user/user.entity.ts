import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { Order } from '../order/order.entity';


@Entity()
export class User {
    @PrimaryGeneratedColumn("increment")
    user_id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    phone_number: string;

    @Column({ default: true })
    isActive: boolean;

    /*@OneToMany(type => Order, order => order.customer)
    orders: Order[];*/
}