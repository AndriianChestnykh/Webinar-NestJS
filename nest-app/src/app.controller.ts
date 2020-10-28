import { Controller, Get } from '@nestjs/common';
import { Handler } from './handler.service';

@Controller()
export class AppController {
  constructor(private readonly handler: Handler) {}

  @Get()
  getConfig(): string {
    return this.handler.getConfig();
  }
}
