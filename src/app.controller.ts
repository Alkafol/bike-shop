import {Controller, Get, Render, UseGuards, UseInterceptors} from "@nestjs/common";
import { AppService } from './app.service';
import { TimeInterceptor } from "./time.interceptor";
import {Session} from "./auth/session/session.decorator";
import { SessionContainer } from "supertokens-node/recipe/session";
import {AuthGuard} from "./auth/auth.guard";


@Controller()
@UseInterceptors(TimeInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  @Render('index')
  async getIndex(@Session() session: SessionContainer){

    const bikes_list = await this.appService.getBikes();

    return { bikes: bikes_list }
  }

  @Get('/accessories')
  @Render('accessories')
  async getAccessories(@Session() session: SessionContainer) {
    const accessories_list = await this.appService.getAccessories();

    return {accessories: accessories_list}
  }

  @Get('/favourites')
  @Render('favourites')
  @UseGuards(new AuthGuard())
  async getFavourites(@Session() session: SessionContainer) {
    const sales_list = await this.appService.getSales();

    return {sales: sales_list}
  }

  @Get('/info')
  @Render('info')
  async getInfo() {

  }

  @Get('/review')
  @Render('review')
  async getReview(@Session() session: SessionContainer) {
    const reviews_list = await this.appService.getReviews();

    return {reviews: reviews_list}
  }

  @Get('/login')
  @Render('login')
  async getLoggingPage(@Session() session: SessionContainer) {
  }
}
