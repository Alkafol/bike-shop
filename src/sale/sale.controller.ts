import { ApiOperation, ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Body, Controller, Delete, Get, NotImplementedException, Param, Post } from "@nestjs/common";
import { SaleService } from "./sale.service";
import { SaleGetDto } from "./dto/sale.get.dto";
import { SalePostDto } from "./dto/sale.post.dto";

@ApiTags('sales')
@Controller('sale')
export class SaleController {

  constructor(private readonly saleService: SaleService) {}

  @ApiOperation({
    summary: 'Get sale by id'
  })
  @ApiParam({ name: 'id', type: 'integer' })
  @ApiResponse({
    status: 200,
    description: 'OK'
  })
  @ApiResponse({
    status: 404,
    description: 'Sale with given ID wasn\'t found'
  })
  @Get('get_by_id')
  async getSaleById(@Param('id') id: bigint): Promise<SaleGetDto> {
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: 'Get all sales that were made by the user'
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
  async getSaleByUser(@Param('user_id') userId: bigint): Promise<SaleGetDto[]> {
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: 'Get all sales that related to the product'
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
  async getSaleByProduct(@Param('product_id') productId: bigint): Promise<SaleGetDto[]> {
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: 'Create new sale'
  })
  @ApiResponse({
    status: 200,
    description: 'OK'
  })
  @Post('create_sale')
  async createSale(@Body() createSaleDto : SalePostDto): Promise<void> {
    throw new NotImplementedException();
  }

}