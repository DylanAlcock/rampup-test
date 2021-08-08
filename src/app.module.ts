import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';

import { Connection } from 'typeorm';
import { User } from './user/user.entity';
import { Product } from './product/product.entity';
import { Order } from './order/order.entity';


@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: 'db',
            entities: [User, Product, Order],
            synchronize: true
        }),
        UserModule,
        ProductModule,
        OrderModule
    ],
    
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
    constructor(private connection: Connection) { }
}
