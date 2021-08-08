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


    @Post()
    addProduct(
        @Body('product_id') product_id: number,
        @Body('name') name: string,
        @Body('description') description: string
    ): any {

        //const generatedID = this.productService.insertProduct(product_id, name, description);
        //return {id: generatedID}
    }
}