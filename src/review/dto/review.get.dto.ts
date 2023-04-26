import {ApiProperty} from "@nestjs/swagger";

export class ReviewGetDto {
  @ApiProperty()
  id : number

  @ApiProperty()
  rate : number

  @ApiProperty()
  description : string

  @ApiProperty()
  author_id : number

  @ApiProperty()
  product_id : number
}
