import {forwardRef, Inject, Injectable} from '@nestjs/common';
import {Logger} from "./logger";

@Injectable()
export class Configuration {
    private environment: string;

    constructor(
        @Inject(forwardRef(() => Logger))
        private logger: Logger
    ) {
        this.environment = process.env.environment;
    }

    public getConfig(): {[s: string]: any} {
        const config = {
            appName: 'Test Nest.JS app',
            environment: this.environment
        };
        this.logger.log(`Config requested. Returning ${JSON.stringify(config)}`);
        return config;
    }
}
