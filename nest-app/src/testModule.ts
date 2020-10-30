import {forwardRef, Inject, Injectable} from '@nestjs/common';
import {Configuration} from "./configuration";

@Injectable()
export class TestModule {
    private shouldLog: boolean;

    constructor(
        @Inject(forwardRef(() => Configuration))
        private configuration: Configuration
    ) {
        this.shouldLog = this.configuration.getConfig().environment === 'debug';
    }

    public testMethod(str: string) {
        if (this.shouldLog) {
            console.log(str);
        }
    }
}
