import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import hbs = require('hbs');
import path = require('path');
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from '@nestjs/common';
import supertokens from "supertokens-node";
import {SupertokensExceptionFilter} from "./auth/auth.filter";
import {IoAdapter} from "@nestjs/platform-socket.io";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const port = app.get(ConfigService).get('PORT') || 3000;
  app.enableCors({
    origin: [process.env.BASE_URL],
    allowedHeaders: ['content-type', ...supertokens.getAllCORSHeaders()],
    credentials: true,
  });
  app.useGlobalFilters(new SupertokensExceptionFilter());

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  hbs.registerPartials(path.join(__dirname,'..', 'views/partials'));

  const config = new DocumentBuilder()
    .setTitle('Bike shop')
    .setDescription('Bike shop API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe());

  app.useWebSocketAdapter(new IoAdapter(app));

  await app.listen(port);
}
bootstrap();
