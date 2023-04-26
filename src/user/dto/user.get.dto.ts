import {ApiProperty} from "@nestjs/swagger";

export class UserGetDto {
  @ApiProperty()
  id : number

  @ApiProperty()
  email : string
}