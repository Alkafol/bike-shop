import {Injectable} from "@nestjs/common";
import { ProductPostDto } from "./dto/product.post.dto";
import { ProductGetDto } from "./dto/product.get.dto";
import { ProductUpdateDto } from "./dto/product.update.dto";
import {PrismaService} from "../prisma.service";

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {
  }

  async findById(id: number): Promise<ProductGetDto | null> {
    return this.prisma.product.findUnique({ where: { id } });
  }

  async findAllByCategory(category_id: number): Promise<ProductGetDto[] | null> {
    const products = this.prisma.product.findMany({
      where: {
        categories: {
          some: {
            category_id: category_id,
          },
        },
      },
    });

    return products;
  }

  async createProduct(productPostDto: ProductPostDto) {
    return this.prisma.product.create({ data: productPostDto });
  }

  async deleteProduct(id: number): Promise<void> {
    this.prisma.product.delete({ where: { id } });
  }

  async update(id: number, productUpdateDto: ProductUpdateDto): Promise<ProductGetDto> {
    return this.prisma.product.update({
      where: { id },
      data: productUpdateDto,
    });
  }
}