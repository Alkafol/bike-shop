import { ApiOperation, ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger";
import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Query} from "@nestjs/common";
import { ReviewService } from "./review.service";
import { ReviewGetDto } from "./dto/review.get.dto";
import { ReviewPostDto } from "./dto/review.post.dto";
import {ReviewValidator} from "./review.validator";

@ApiTags('reviews')
@Controller('reviews')
export class ReviewController {

  constructor(private readonly reviewService: ReviewService, private readonly reviewValidator: ReviewValidator) {}

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
  @Get('get_by_id/:id')
  async getReviewById(@Param('id', ParseIntPipe) id: number): Promise<ReviewGetDto> {
    return await this.reviewService.findById(id);
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
  @Get('get_all_by_user/:user_id')
  async getReviewByUser(
      @Query('skip') skip: string,
      @Query('take') take: string,
      @Param('product_id', ParseIntPipe) authorId: number): Promise<ReviewGetDto[]> {
    return await this.reviewService.findByAuthorId(authorId, {skip: Number(skip), take: Number(take)});
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
  @Get('get_all_by_product/:product_id')
  async getReviewByProduct(@Param('product_id', ParseIntPipe) productId: number): Promise<ReviewGetDto[]>{
    return await this.reviewService.findByProduct(productId);
  }


  @ApiOperation({
    summary: 'Create review for product'
  })
  @ApiResponse({
    status: 200,
    description: 'OK'
  })
  @Post('create_review')
  async createReview(@Body() reviewPostDto : ReviewPostDto): Promise<void> {
    this.reviewValidator.validate(reviewPostDto);
    await this.reviewService.createReview(reviewPostDto);
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
  @Delete('delete_review/:id')
  async deleteReview(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.reviewService.deleteReview(id);
  }
}