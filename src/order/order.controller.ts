import { Controller, Post, Body, Get, Param } from '@nestjs/common';

import { OrderService } from './order.service';


@Controller('order')
export class OrderController {

    constructor(private readonly orderService: OrderService) { }

    @Get()
    getAllOrders() {
        return this.orderService.findAll();
    }


    @Get(':oid')
    getOrder(@Param('oid') order_id: number) {
        return this.orderService.findOne(order_id);
    }


    @Post()
    addOrder(
        @Body('first_name') first_name: string,
        @Body('last_name') last_name: string,
        @Body('phone_number') phone_number: string,
        @Body('product_id') product_id: number
    ): any {


        //const generatedID = this.orderService.insertOrder(first_name, last_name, phone_number, product_id);
        //return {id: generatedID}
    }
}