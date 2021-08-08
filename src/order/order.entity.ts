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
    user_id: number;

    @Column()
    product_id: number;

    @ManyToOne(type => User, user => user.orders)
    @JoinColumn({ name: "user_id" })
    customer: User;
   // defining this is also optional because by default,
   // the referenced foreign key is named as <column_name>_id or account_id

    @ManyToOne(type => Product, product => product.orders)
    @JoinColumn({ name: "product_id" })
    product: Product;
   // defining this is also optional because by default,
   // the referenced foreign key is named as <column_name>_id or account_id
}