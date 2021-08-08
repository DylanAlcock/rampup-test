import { Controller, Post, Body, Get, Param } from '@nestjs/common';

import { UserService } from './user.service';
import { User } from './user.entity';


@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) { }

    @Get()
    getAllUsers() {
        return this.userService.findAll();
    }

    @Get()
    async getUserbyID(): Promise<User[]> {
        return this.userService.findAll();
    }


    @Get(':user_id')
    getUser(@Param('user_id') id: number) {
        return this.userService.findOne(id);
    }


    @Post()
    addUser(
        @Body('first_name') first_name: string,
        @Body('last_name') last_name: string,
        @Body('phone_number') phone_number: string,
        @Body('product_id') product_id: number
    ): any {
        //User user = new User(first_name, last_name, phone_number);


        //const generatedID = this.userService.insertUser(first_name, last_name, phone_number, product_id);
        //return {id: generatedID}
    }
}