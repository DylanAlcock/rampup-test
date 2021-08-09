import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';
import { ProductService } from '../product/product.service';
import { UserService } from '../user/user.service';


@Injectable()
export class OrderService {
    private orders: Order[] = [];

    constructor(
        @InjectRepository(Order)
        private ordersRepository: Repository<Order>,
        private readonly productService: ProductService,
        private readonly userService: UserService
    ) { }

    findAll(): Promise<Order[]> {
        return this.ordersRepository.find();
    }

    findOne(id: number): Promise<Order> {
        return this.ordersRepository.findOne(id);
    }

    async createOrder(first_name: string, last_name: string, phone_number: string, product_id: number): Promise<Order> {

        const newOrder = await this.ordersRepository.create({ first_name, last_name, phone_number, product_id });
        return this.ordersRepository.save(newOrder);
    }


    async remove(id: number): Promise<void> {
        await this.ordersRepository.delete(id);
    }
}
