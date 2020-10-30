import { Injectable } from '@nestjs/common';
import {Configuration} from "./configuration";
import {Logger} from "./logger";

@Injectable()
export class Handler {
  constructor (
      private configuration: Configuration,
      private logger: Logger
  ) {
  }

  public getConfig(): string {
    const config = this.configuration.getConfig();
    this.logger.log(`Got request for configuration. Returning: ${config}`);
    return JSON.stringify(config);
  }
}
