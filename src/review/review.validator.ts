import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {ReviewPostDto} from "./dto/review.post.dto";

@Injectable()
export class ReviewValidator {
    validate (reviewPostDto: ReviewPostDto) {
        if (reviewPostDto.description.length < 30){
            throw new HttpException('Too short description', HttpStatus.BAD_REQUEST);
        }

        if (reviewPostDto.rate < 1 || reviewPostDto.rate > 5 || !Number.isInteger(reviewPostDto.rate)){
            throw new HttpException('Incorrect rate', HttpStatus.BAD_REQUEST);
        }
    }
}