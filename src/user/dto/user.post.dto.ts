import { ApiProperty } from "@nestjs/swagger";

export class UserPostDto {
  @ApiProperty()
  email : string

  @ApiProperty()
  password : string
}