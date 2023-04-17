import { ApiProperty } from "@nestjs/swagger";

export class SalePostDto {
  @ApiProperty()
  user_id : bigint

  @ApiProperty()
  product_id : bigint

  @ApiProperty()
  final_price : number

  @ApiProperty()
  amount : bigint

  @ApiProperty()
  sale_time : string
}
