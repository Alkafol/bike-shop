import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {ProductPostDto} from "./dto/product.post.dto";

@Injectable()
export class ProductValidator {
    validate (productPostDto: ProductPostDto) {
        if (productPostDto.name.length <= 5 && productPostDto.name.length >= 100){
            throw new HttpException('Incorrect name length', HttpStatus.BAD_REQUEST);
        }

        if (productPostDto.description.length < 30){
            throw new HttpException('Too short description', HttpStatus.BAD_REQUEST);
        }
    }
}