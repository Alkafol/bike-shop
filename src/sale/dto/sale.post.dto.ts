import { ApiProperty } from "@nestjs/swagger";
import {IsNotEmpty} from "class-validator";

export class SalePostDto {
  @ApiProperty()
  @IsNotEmpty()
  user_id : number

  @ApiProperty()
  @IsNotEmpty()
  product_id : number

  @ApiProperty()
  @IsNotEmpty()
  final_price : number

  @ApiProperty()
  @IsNotEmpty()
  amount : number

  @ApiProperty()
  @IsNotEmpty()
  sale_time : string
}
