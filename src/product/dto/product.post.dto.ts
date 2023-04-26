import { ApiProperty } from "@nestjs/swagger";
import {Optional} from "@nestjs/common";
import {IsNotEmpty, IsNumberString} from "class-validator";

export class ProductPostDto {
  @ApiProperty()
  @IsNotEmpty()
  name : string

  @ApiProperty()
  @IsNotEmpty()
  @IsNumberString()
  price : number

  @ApiProperty()
  @IsNotEmpty()
  description : string

  @ApiProperty()
  @Optional()
  image : Buffer
}
