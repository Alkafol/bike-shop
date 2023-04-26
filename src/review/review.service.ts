import {PrismaService} from "../prisma.service";
import {ReviewGetDto} from "./dto/review.get.dto";
import {ReviewPostDto} from "./dto/review.post.dto";
import {Injectable} from "@nestjs/common";

@Injectable()
export class ReviewService {
    constructor(private prisma: PrismaService) {
    }

    async findById(id: number): Promise<ReviewGetDto | null> {
        return this.prisma.review.findUnique({where: {id}})
    }

    async findByAuthorId(author_id: number, params: {
        skip?: number;
        take?: number;
    }): Promise<ReviewGetDto[] | null> {
        const { skip, take } = params


        if (isNaN(skip)) {
            return this.prisma.review.findMany({
                take
            });
        }else{
            return this.prisma.review.findMany({
                skip,
                take
            });
        }

        // return this.prisma.review.findMany({where: {author_id}});
    }

    async findByProduct(product_id: number): Promise<ReviewGetDto[] | null> {
        return this.prisma.review.findMany({where: {product_id}});
    }

    async createReview(reviewPostDto: ReviewPostDto) {
        return this.prisma.review.create({data: reviewPostDto});
    }

    async deleteReview(id: number): Promise<void> {
        this.prisma.review.delete({where: {id}});
    }
}