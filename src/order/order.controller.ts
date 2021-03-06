import { ParseIntPipe } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';
import { HttpException } from '@nestjs/common';
import { HttpCode } from '@nestjs/common';
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ProductService } from '../product/product.service';
import { UserService } from '../user/user.service';

import { OrderService } from './order.service';


@Controller('order')
export class OrderController {

    constructor(
        private readonly orderService: OrderService,
        private readonly productService: ProductService,
        private readonly userService: UserService,
    ) { }

    @Get()
    getAllOrders() {
        return this.orderService.findAll();
    }


    @Get(':oid')
    getOrder(@Param('oid') order_id: number) {
        return this.orderService.findOne(order_id);
    }


    @Post()
    @HttpCode(200)
    async addOrder(
        @Body('first_name') first_name: string,
        @Body('last_name') last_name: string,
        @Body('phone_number') phone_number: string,
        @Body('product_id', ParseIntPipe) product_id: number
    ): Promise<any> {

        const product = await this.productService.findOne(product_id);

        //Check if product_id is valid
        if (!product) {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: 'Could not find product with specified product ID.',
            }, HttpStatus.BAD_REQUEST);
        }

        //Check if user exists if not create, if user is not active throw error
        var user = await this.userService.findUser(first_name, last_name, phone_number);
        if (user === undefined) {
            user = await this.userService.createUser(first_name, last_name, phone_number);
        } else if (user.isActive === false) {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: 'This user is no longer active',
            }, HttpStatus.BAD_REQUEST);
        }

        //Check to make sure request parameters are not empty
        if (!first_name || !last_name || !phone_number) {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: 'Request parameters cannot be empty',
            }, HttpStatus.BAD_REQUEST);
        }


        const order = await this.orderService.createOrder(first_name, last_name, phone_number, product_id);
        return { order: order }
    }
}