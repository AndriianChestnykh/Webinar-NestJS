import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { Handler } from './handler.service';
import { Configuration } from './configuration';
import { Logger } from './logger';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [Handler, Configuration, Logger],
})
export class AppModule {}
