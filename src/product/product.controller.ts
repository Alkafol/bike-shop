import { ProductService } from "./product.service";
import { Body, Controller, Delete, Get, NotImplementedException, Param, Patch, Post } from "@nestjs/common";
import { ProductGetDto } from "./dto/product.get.dto";
import { ProductPostDto } from "./dto/product.post.dto";
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('products')
@Controller('product')
export class ProductController {

  constructor(private readonly productService: ProductService) {}

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
  @Get('get_by_id')
  async getProductById(@Param('id') id: bigint): Promise<ProductGetDto> {
    throw new NotImplementedException();
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
  @Get('get_all_by_category')
  async getAllProductsByCategory(@Param('category') category: string): Promise<ProductGetDto[]> {
    throw new NotImplementedException();
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
  async createProduct(@Body() createProductDto : ProductPostDto): Promise<void> {
    throw new NotImplementedException();
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
  @Delete('delete_product')
  async deleteProduct(@Param('id') id: bigint): Promise<void> {
    throw new NotImplementedException();
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
  @Patch('change_product')
  async changeProduct(@Body() createProductDto : ProductPostDto): Promise<void> {
    throw new NotImplementedException();
  }
}
