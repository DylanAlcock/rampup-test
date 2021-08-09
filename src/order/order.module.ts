import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { Order } from './order.entity';
import { ProductService } from '../product/product.service';
import { Product } from '../product/product.entity';
import { UserService } from '../user/user.service';
import { User } from '../user/user.entity';


@Module({
    imports: [TypeOrmModule.forFeature([Order, Product, User])],
    controllers: [OrderController],
    providers: [OrderService, ProductService, UserService],
})

export class OrderModule { }