import { ApiOperation, ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger";
import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post} from "@nestjs/common";
import { UserService } from "./user.service";
import { UserGetDto } from "./dto/user.get.dto";
import { UserPostDto } from "./dto/user.post.dto";

@ApiTags('users')
@Controller('users')
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
  @Get('get_by_id/:id')
  async getUserById(@Param('id', ParseIntPipe) id: number): Promise<UserGetDto> {
    return await this.userService.findById(id);
  }

  @ApiOperation({
    summary: 'Create new user'
  })
  @ApiResponse({
    status: 200,
    description: 'OK'
  })
  @Post('create_user')
  async createUser(@Body() createUserDto : UserPostDto): Promise<UserGetDto> {
    return await this.userService.createUser(createUserDto);
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
  @Delete('delete_user/:id')
  async deleteUser(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.userService.deleteUser(id);
  }
}