import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';

@Injectable()
export class OrderService {
    private orders: Order[] = [];

    constructor(
        @InjectRepository(Order)
        private usersRepository: Repository<Order>,
    ) { }

    findAll(): Promise<Order[]> {
        return this.usersRepository.find();
    }

    findOne(id: number): Promise<Order> {
        return this.usersRepository.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.usersRepository.delete(id);
    }
}

/*
    insertOrder(fname: string, lname: string, pnumber: string, pid: number) {
        const newOrder = new Order(fname, lname, pnumber, pid)
        this.orders.push(newOrder)

        return pid;
    }

    getOrders() {
        return [...this.orders];
    }

    getSingleOrder(pid: number) {
        const order = this.orders.find((odr) => odr.product_id == pid);

        if (!order)
            throw new NotFoundException("Could not find order with specified product ID.");

        return { ...order }
    }

}*/