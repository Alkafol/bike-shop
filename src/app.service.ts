import {Injectable} from "@nestjs/common";
import {ProductService} from "./product/product.service";
import {ReviewService} from "./review/review.service";
import {UserService} from "./user/user.service";
import {SaleService} from "./sale/sale.service";

@Injectable()
export class AppService {
    constructor(private readonly productService: ProductService,
                private readonly reviewService: ReviewService,
                private readonly userService: UserService,
                private readonly saleService: SaleService
    ) {
    }

    getBikes() {
        return this.productService.findAllByCategory(0);
    }

    async getAccessories() {
        return await this.productService.findAllByCategory(1);
    }

    async getSales() {
        const sales_data = await this.saleService.findByUserId(1);

        for (const el of sales_data) {
            el["product"] = await this.getProduct(el.product_id).then(data =>{
                return data.name
            });
        }

        return sales_data
    }

    async getReviews() {
        const review_data = await this.reviewService.findByAuthorId(1, {});

        for (const el of review_data) {
            el["product"] = await this.getProduct(el.product_id).then(data =>{
                return data.name
            });
        }

        return review_data
    }

    async getProduct(productId: number){
        return await this.productService.findById(productId)
    }
}
