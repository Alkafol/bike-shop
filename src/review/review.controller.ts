import { ApiOperation, ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Body, Controller, Delete, Get, NotImplementedException, Param, Post } from "@nestjs/common";
import { ReviewService } from "./review.service";
import { ReviewGetDto } from "./dto/review.get.dto";
import { ReviewPostDto } from "./dto/review.post.dto";

@ApiTags('reviews')
@Controller('review')
export class ReviewController {

  constructor(private readonly reviewService: ReviewService) {}

  @ApiOperation({
    summary: 'Get review by given ID'
  })
  @ApiParam({ name: 'id', type: 'integer' })
  @ApiResponse({
    status: 200,
    description: 'OK'
  })
  @ApiResponse({
    status: 404,
    description: 'Review with given ID wasn\'t found'
  })
  @Get('get_by_id')
  async getReviewById(@Param('id') id: bigint): Promise<ReviewGetDto> {
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: 'Get all reviews that user has created'
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
  @Get('get_all_by_user')
  async getReviewByUser(@Param('user_id') userId: bigint): Promise<ReviewGetDto[]> {
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: 'Get all reviews that was left for specific product'
  })
  @ApiParam({ name: 'id', type: 'integer' })
  @ApiResponse({
    status: 200,
    description: 'OK'
  })
  @ApiResponse({
    status: 404,
    description: 'Product with given ID wasn\'t found'
  })
  @Get('get_all_by_product')
  async getReviewByProduct(@Param('product_id') productId: bigint): Promise<ReviewGetDto[]> {
    throw new NotImplementedException();
  }


  @ApiOperation({
    summary: 'Create review for product'
  })
  @ApiResponse({
    status: 200,
    description: 'OK'
  })
  @Post('create_review')
  async createReview(@Body() createReviewDto : ReviewPostDto): Promise<void> {
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: 'Delete review with given ID'
  })
  @ApiParam({ name: 'id', type: 'integer' })
  @ApiResponse({
    status: 200,
    description: 'OK'
  })
  @ApiResponse({
    status: 404,
    description: 'Review with given ID wasn\'t found'
  })
  @Delete('delete_review')
  async deleteReview(@Param('id') id: bigint): Promise<void> {
    throw new NotImplementedException();
  }
}