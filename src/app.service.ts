import { Injectable, UseInterceptors } from "@nestjs/common";
import { TimeInterceptor } from "./time.interceptor";

@Injectable()
export class AppService {
  getBikes(): string {
    return require('../public/bikes.json')
  }

  getAccessories(): string {
    return require('../public/accessories.json')
  }
}
