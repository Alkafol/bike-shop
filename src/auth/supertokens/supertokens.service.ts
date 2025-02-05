import { Inject, Injectable } from '@nestjs/common';
import supertokens from 'supertokens-node';
import Session from 'supertokens-node/recipe/session';
import { ConfigInjectionToken, AuthModuleConfig } from '../config.interface';
import EmailPassword from 'supertokens-node/recipe/emailpassword';


@Injectable()
export class SupertokensService {
    constructor(@Inject(ConfigInjectionToken) private config: AuthModuleConfig) {
        supertokens.init({
            appInfo: config.appInfo,
            supertokens: {
                connectionURI: config.connectionURI,
                apiKey: config.apiKey,
            },
            recipeList: [
                EmailPassword.init({
                }),
                Session.init(),
            ]
        });
    }
}