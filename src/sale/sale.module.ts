import { Module } from "@nestjs/common";
import { SaleController } from "./sale.controller";
import { SaleService } from "./sale.service";
import {PrismaService} from "../prisma.service";
import {SaleValidator} from "./sale.validator";

@Module({
  controllers: [SaleController],
  providers: [SaleService, PrismaService, SaleValidator],
  exports: [SaleService]
})
export class SaleModule {}