import { Controller, Post, Body, Get, Param } from '@nestjs/common';

import { ProductService } from './product.service';


@Controller('product')
export class ProductController {

    constructor(private readonly productService: ProductService) { }

    @Get()
    getAllProducts() {
        return this.productService.findAll();
    }


    @Get(':pid')
    getProduct(@Param('pid') product_id: number) {
        return this.productService.findOne(product_id);
    }
}