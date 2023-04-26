import { ApiOperation, ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger";
import {Body, Controller, Delete, Get, NotImplementedException, Param, ParseIntPipe, Post} from "@nestjs/common";
import { SaleService } from "./sale.service";
import { SaleGetDto } from "./dto/sale.get.dto";
import { SalePostDto } from "./dto/sale.post.dto";
import {SaleValidator} from "./sale.validator";

@ApiTags('sales')
@Controller('sales')
export class SaleController {

  constructor(private readonly saleService: SaleService, private saleValidator: SaleValidator) {}

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
  @Get('get_by_id/:id')
  async getSaleById(@Param('id', ParseIntPipe) id: number): Promise<SaleGetDto> {
    return await this.saleService.findById(id);
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
  @Get('get_all_by_user/:user_id')
  async getSaleByUser(@Param('user_id', ParseIntPipe) userId: number): Promise<SaleGetDto[]> {
    return await this.saleService.findByUserId(userId);
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
  @Get('get_all_by_product/:product_id')
  async getSaleByProduct(@Param('product_id', ParseIntPipe) productId: number): Promise<SaleGetDto[]> {
    return await this.saleService.findByProductId(productId);
  }

  @ApiOperation({
    summary: 'Create new sale'
  })
  @ApiResponse({
    status: 200,
    description: 'OK'
  })
  @Post('create_sale')
  async createSale(@Body() salePostDto : SalePostDto): Promise<void> {
    this.saleValidator.validate(salePostDto);

    await this.saleService.createSale(salePostDto);
  }
}