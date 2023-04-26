import { ApiProperty } from "@nestjs/swagger";
import {IsNotEmpty, IsNumberString} from "class-validator";

export class ReviewPostDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumberString()
  rate : number

  @ApiProperty()
  @IsNotEmpty()
  description : string

  @ApiProperty()
  @IsNotEmpty()
  @IsNumberString()
  author_id : number

  @ApiProperty()
  @IsNotEmpty()
  @IsNumberString()
  product_id : number
}
