import { Module } from "@nestjs/common";
import { ProductController } from "./product.controller";
import { ProductService } from "./product.service";
import {PrismaService} from "../prisma.service";
import {ProductValidator} from "./product.validator";

@Module({
  controllers: [ProductController],
  providers: [ProductService, PrismaService, ProductValidator],
  exports: [ProductService]
})
export class ProductModule {}