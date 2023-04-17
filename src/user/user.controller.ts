import { ApiOperation, ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Body, Controller, Delete, Get, NotImplementedException, Param, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserGetDto } from "./dto/user.get.dto";
import { UserPostDto } from "./dto/user.post.dto";

@ApiTags('users')
@Controller('user')
export class UserController {

  constructor(private readonly userService: UserService) {}

  @ApiOperation({
    summary: 'Get user by id'
  })
  @ApiParam({ name: 'id', type: 'integer' })
  @ApiResponse({
    status: 200,
    description: 'OK'
  })
  @ApiResponse({
    status: 404,
    description: 'User with given ID wasn\'t found'
  })
  @Get('get_by_id')
  async getUserById(@Param('id') id: bigint): Promise<UserGetDto> {
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: 'Create new user'
  })
  @ApiResponse({
    status: 200,
    description: 'OK'
  })
  @Post('create_user')
  async createUser(@Body() createUserDto : UserPostDto): Promise<void> {
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: 'Delete user by id'
  })
  @ApiParam({ name: 'id', type: 'integer' })
  @ApiResponse({
    status: 200,
    description: 'OK'
  })
  @ApiResponse({
    status: 404,
    description: 'User with given ID wasn\'t found'
  })
  @Delete('delete_user')
  async deleteUser(@Param('id') id: bigint): Promise<void> {
    throw new NotImplementedException();
  }
}