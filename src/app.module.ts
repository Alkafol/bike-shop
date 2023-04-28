import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from "./product/product.module";
import { ReviewModule } from "./review/review.module";
import { UserModule } from "./user/user.module";
import { SaleModule } from "./sale/sale.module";
import {APP_FILTER} from "@nestjs/core";
import {HttpExceptionFilter} from "./exception.filter";
import { AuthModule } from './auth/auth.module';
import {WebsocketModule} from "./websocket/websocket.module";

@Module({
  imports: [
      ConfigModule.forRoot(),
      AuthModule.forRoot({
          connectionURI: process.env.CONNECTION_URI,
          apiKey: process.env.API_KEY,
          appInfo: {
              appName: "bike-shop",
              apiDomain: process.env.BASE_URL,
              websiteDomain: process.env.BASE_URL,
              apiBasePath: "/auth"
          },
      }), ProductModule, ReviewModule, UserModule, SaleModule, WebsocketModule],
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
