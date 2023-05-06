import { Controller, Get } from '@nestjs/common';
import { SubTopicsService } from './sub-topics.service';

@Controller('sub-topics')
export class SubTopicsController {
  constructor(private subTopicService: SubTopicsService) {}

  @Get()
  getAllSubTopics() {
    return this.subTopicService.getAllSubTopics();
  }
}
