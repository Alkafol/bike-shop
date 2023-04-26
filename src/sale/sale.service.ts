import {PrismaService} from "../prisma.service";
import {SaleGetDto} from "./dto/sale.get.dto";
import {SalePostDto} from "./dto/sale.post.dto";
import {Injectable} from "@nestjs/common";

@Injectable()
export class SaleService{
    constructor(private prisma: PrismaService) {
    }

    async findById(id: number): Promise<SaleGetDto | null> {
        return this.prisma.sale.findUnique({ where: { id } });
    }

    async findByUserId(user_id: number): Promise<SaleGetDto[] | null> {
        return this.prisma.sale.findMany({ where: { user_id } });
    }

    async findByProductId(product_id: number): Promise<SaleGetDto[] | null> {
        return this.prisma.sale.findMany({ where: { product_id } });
    }

    async createSale(salePostDto: SalePostDto){
        return this.prisma.sale.create({ data: salePostDto });
    }
}
