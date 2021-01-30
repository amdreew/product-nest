import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body } from '@nestjs/common';
import { createProductDTO } from './dto/product.dto';

@Controller('product')
export class ProductController {

    @Post('/create')
    createPost(@Res() res, @Body() createProductDTO: createProductDTO) {
        return res.status(HttpStatus.OK).json({
            mensaje: 'recibido'
        });   
    }
}
