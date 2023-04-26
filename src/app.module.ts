import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from "./product/product.module";
import { ReviewModule } from "./review/review.module";
import { UserModule } from "./user/user.module";
import { SaleModule } from "./sale/sale.module";
import {HttpModule} from "@nestjs/axios";
import {APP_FILTER} from "@nestjs/core";
import {HttpExceptionFilter} from "./exception.filter";

@Module({
  imports: [ConfigModule.forRoot(), ProductModule, ReviewModule, UserModule, SaleModule, HttpModule],
  controllers: [AppController],
  providers: [
      AppService,
      {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
      },
  ],

})
export class AppModule {}
