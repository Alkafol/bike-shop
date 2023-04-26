import { PartialType } from '@nestjs/swagger';
import { ProductPostDto } from "./product.post.dto";

export class ProductUpdateDto extends PartialType(ProductPostDto) {}