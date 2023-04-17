import { ApiProperty } from "@nestjs/swagger";

export class ProductPostDto {
  @ApiProperty()
  name : string

  @ApiProperty()
  price : number

  @ApiProperty()
  description : string

  @ApiProperty()
  image : string
}
