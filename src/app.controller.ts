import {Controller, Get, Render, UseInterceptors} from "@nestjs/common";
import { AppService } from './app.service';
import { TimeInterceptor } from "./time.interceptor";

@Controller()
@UseInterceptors(TimeInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  @Render('index')
  async getIndex(){
    const bikes_list = await this.appService.getBikes();

    return { bikes: bikes_list }
  }

  @Get('/accessories')
  @Render('accessories')
  async getAccessories() {
    const accessories_list = await this.appService.getAccessories();

    return {accessories: accessories_list}
  }

  @Get('/favourites')
  @Render('favourites')
  async getFavourites() {
    const sales_list = await this.appService.getSales();

    return {sales: sales_list}
  }

  @Get('/info')
  @Render('info')
  async getInfo() {

  }

  @Get('/review')
  @Render('review')
  async getReview() {
    const reviews_list = await this.appService.getReviews();

    return {reviews: reviews_list}
  }
}
