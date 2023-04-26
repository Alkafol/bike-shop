import { ProductService } from "./product.service";
import {Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Render} from "@nestjs/common";
import { ProductGetDto } from "./dto/product.get.dto";
import { ProductPostDto } from "./dto/product.post.dto";
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ProductUpdateDto } from "./dto/product.update.dto";
import {ProductValidator} from "./product.validator";

@ApiTags('products')
@Controller('products')
export class ProductController {

  constructor(private readonly productService: ProductService, private productValidator: ProductValidator) {}

  @ApiOperation({
    summary: 'Get product by given id'
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
  @Get('get_by_id/:id')
  async getProductById(@Param('id', ParseIntPipe) id: number): Promise<ProductGetDto> {
    return await this.productService.findById(id);
  }

  @ApiOperation({
    summary: 'Get all products with given category'
  })
  @ApiParam({ name: 'category', type: 'string' })
  @ApiResponse({
    status: 200,
    description: 'OK'
  })
  @ApiResponse({
    status: 404,
    description: 'Invalid category'
  })
  @Get('get_all_by_category/:category')
  async getAllProductsByCategory(@Param('category', ParseIntPipe) category_id: number): Promise<ProductGetDto[]> {
    return await this.productService.findAllByCategory(category_id);
  }

  @ApiOperation({
    summary: 'Create product'
  })
  @ApiResponse({
    status: 200,
    description: 'OK'
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden'
  })
  @Post('create_product')
  async createProduct(@Body() productPostDto : ProductPostDto): Promise<void> {
    this.productValidator.validate(productPostDto);

    await this.productService.createProduct(productPostDto);
  }

  @ApiOperation({
    summary: 'Delete product with given ID'
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
  @Delete('delete_product/:id')
  async deleteProduct(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return await this.productService.deleteProduct(id);
  }

  @ApiOperation({
    summary: 'Change product characteristics'
  })
  @ApiResponse({
    status: 200,
    description: 'OK'
  })
  @ApiResponse({
    status: 404,
    description: 'Product with given ID wasn\'t found'
  })
  @Patch('change_product/:id')
  async changeProduct(@Param('id', ParseIntPipe) id: number, @Body() productUpdateDto : ProductUpdateDto): Promise<ProductGetDto> {
    return await this.productService.update(id, productUpdateDto);
  }
}