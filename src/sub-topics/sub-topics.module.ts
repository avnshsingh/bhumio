import { Module } from '@nestjs/common';
import { SubTopicsController } from './sub-topics.controller';
import { SubTopicsService } from './sub-topics.service';

@Module({
  controllers: [SubTopicsController],
  providers: [SubTopicsService]
})
export class SubTopicsModule {}
