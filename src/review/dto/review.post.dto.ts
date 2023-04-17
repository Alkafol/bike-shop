import { ApiProperty } from "@nestjs/swagger";

export class ReviewPostDto {
  @ApiProperty()
  rate : bigint

  @ApiProperty()
  description : string

  @ApiProperty()
  userId : bigint
}
