import { ApiProperty } from "@nestjs/swagger";

export class ProductGetDto {
  @ApiProperty()
  id : number

  @ApiProperty()
  name : string

  @ApiProperty()
  price : number

  @ApiProperty()
  description : string

  @ApiProperty()
  image : Buffer
}
