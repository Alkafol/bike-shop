import {PartialType} from "@nestjs/swagger";
import {ReviewPostDto} from "./review.post.dto";

export class ReviewUpdateDto extends PartialType(ReviewPostDto) {}