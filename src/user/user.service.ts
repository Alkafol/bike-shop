import {PrismaService} from "../prisma.service";
import {UserGetDto} from "./dto/user.get.dto";
import {UserPostDto} from "./dto/user.post.dto";
import {Injectable, Param} from "@nestjs/common";

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {
    }

    async findById(id: number): Promise<UserGetDto | null> {
        return this.prisma.user.findUnique({where: {id}});
    }

    async createUser(userPostDto: UserPostDto): Promise<UserGetDto> {
        return this.prisma.user.create({ data: userPostDto});
    }

    async deleteUser(@Param('id') id: number): Promise<void> {
        this.prisma.user.delete({ where: { id } });
    }
}
