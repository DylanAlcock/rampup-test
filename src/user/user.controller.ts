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
}