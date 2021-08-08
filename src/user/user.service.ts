import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { last } from 'rxjs';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    private users: User[] = [];

    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) { }

    findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    findOne (id: number): Promise<User> {
        return this.usersRepository.findOne(id);
    }

    findUser(fname: string, lname: string, pnumber: string): Promise<User> {
        return this.usersRepository.findOne({ first_name: fname, last_name: lname, phone_number: pnumber });
    }

    customQuery(first_name: string, last_name: string, phone_number: string): any {
        return this.usersRepository.createQueryBuilder("user")
            .where("first_name = :fname", { fname: first_name })
            .andWhere("last_name = :lname", { lname: last_name })
            .andWhere("phone_number = :pnumber", { pnumber: phone_number })
    }

    createUser(first_name: string, last_name: string, phone_number: string): Promise<User> {
        const newUser = this.usersRepository.create({ first_name, last_name, phone_number })
        return this.usersRepository.save(newUser);
    }

    async updateUser(id: number, fname: string): Promise<User> {
        const user = await this.findOne(id);
        user.first_name = fname;
        return this.usersRepository.save(user);
    }

    async deleteUser(id: number): Promise<User> {
        const user = await this.findOne(id);
        return this.usersRepository.remove(user);
    }
}




/*
    insertUser(fname: string, lname: string, pnumber: string, email: string) {
        const newUser = new User(fname, lname, pnumber, email)
        this.users.push(newUser)

        return email;
    }

    getUsers() {
        return [...this.users];
    }

    getSingleUser(email: string) {
        const user = this.users.find((usr) => usr.email == email);

        if (!user)
            throw new NotFoundException("Could not find user with specified product email.");

        return { ...user }
    }*/