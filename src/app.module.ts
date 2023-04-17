import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from "./product/product.module";
import { ReviewModule } from "./review/review.module";
import { UserModule } from "./user/user.module";
import { SaleModule } from "./sale/sale.module";

@Module({
  imports: [ConfigModule.forRoot(), ProductModule, ReviewModule, UserModule, SaleModule],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
