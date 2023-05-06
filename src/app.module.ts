import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { SubTopicsModule } from './sub-topics/sub-topics.module';

@Module({
  imports: [TasksModule, SubTopicsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
