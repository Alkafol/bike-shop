import { Module } from "@nestjs/common";
import { ReviewController } from "./review.controller";
import { ReviewService } from "./review.service";
import {PrismaService} from "../prisma.service";
import {ProductValidator} from "../product/product.validator";
import {ReviewValidator} from "./review.validator";

@Module({
  controllers: [ReviewController],
  providers: [ReviewService, PrismaService, ReviewValidator],
  exports: [ReviewService]
})
export class ReviewModule {}