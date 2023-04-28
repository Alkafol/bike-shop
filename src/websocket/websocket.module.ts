import { Module } from '@nestjs/common';
import {AppGateway} from "./sales.gateway";

@Module({
    imports: [],
    controllers: [],
    providers: [AppGateway],
})
export class WebsocketModule {}
