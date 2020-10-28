import {forwardRef, Inject, Injectable} from '@nestjs/common';
import {Configuration} from "./configuration";

@Injectable()
export class Logger {
    private shouldLog: boolean;

    constructor(
        @Inject(forwardRef(() => Configuration))
        private configuration: Configuration
    ) {
        this.shouldLog = this.configuration.getConfig() === 'debug';
    }

    public log(str: string) {
        if (this.shouldLog) {
            console.log(str);
        }
    }
}
