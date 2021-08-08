import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
    private products: Product[] = [];

    constructor(
        @InjectRepository(Product)
        private usersRepository: Repository<Product>,
    ) { }

    findAll(): Promise<Product[]> {
        return this.usersRepository.find();
    }

    findOne(id: number): Promise<Product> {
        return this.usersRepository.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.usersRepository.delete(id);
    }
}

/*
    insertProduct(pid: number, name: string, description: string) {
        const newProduct = new Product(pid, name, description);
        this.products.push(newProduct);

        return pid;
    }

    getProducts() {
        return [...this.products];
    }

    getSingleProduct(pid: number) {
        const product = this.products.find((prod) => prod.product_id == pid);

        if (!product)
            throw new NotFoundException("Could not find product with specified product ID.");

        return { ...product }
    }

}*/