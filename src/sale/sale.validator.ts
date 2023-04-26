import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {SalePostDto} from "./dto/sale.post.dto";

@Injectable()
export class SaleValidator {
    validate (salePostDto: SalePostDto) {
        if (salePostDto.amount < 1){
            throw new HttpException('Invalid amount', HttpStatus.BAD_REQUEST);
        }

        if (salePostDto.final_price < 0){
            throw new HttpException('Invalid final price', HttpStatus.BAD_REQUEST);
        }
    }
}