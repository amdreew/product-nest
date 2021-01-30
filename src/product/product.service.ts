import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './interfaces/product.interface';
import { CreateProductDTO } from './dto/product.dto';

@Injectable()
export class ProductService {

    constructor(@InjectModel('Product') private readonly productModel: Model<Product>) {}

    public async getProducts(): Promise<Product[]> {        
        return await this.productModel.find(); 
    }

    public async getProduct(id: string): Promise<Product> {
        return await this.productModel.findById(id);
    }

    public async createProduct(createProductDTO: CreateProductDTO): Promise<Product> {
        const product = new this.productModel(createProductDTO);        
        return await product.save();
    }

    public async deleteProduct(id: string) {
        return await this.productModel.findByIdAndDelete(id);
    }

    public async updateProduct(id: string, createProductDTO: CreateProductDTO): Promise<Product> {
        return await this.productModel.findByIdAndUpdate(id, createProductDTO, {new: true});
    }

}
