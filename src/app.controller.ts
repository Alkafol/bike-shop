import { Controller, Get, Render, Req, Res, UseInterceptors } from "@nestjs/common";
import { AppService } from './app.service';
import { TimeInterceptor } from "./time.interceptor";

@Controller()
@UseInterceptors(TimeInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/index')
  @Render('index')
  async getIndex(){
    const bikes_list = this.appService.getBikes();

    return { bikes: bikes_list }
  }

  @Get('/accessories')
  @Render('accessories')
  getAccessories() {
    const accessories_list = this.appService.getAccessories();

    return {accessories: accessories_list}
  }

  @Get('/favourites')
  @Render('favourites')
  getFavourites() {
    return {}
  }

  @Get('/info')
  @Render('info')
  getInfo() {
    return {}
  }

  @Get('/review')
  @Render('review')
  getReview() {
    return {}
  }
}
