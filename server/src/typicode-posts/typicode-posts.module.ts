import { BullModule } from '@nestjs/bullmq';
import { Module } from '@nestjs/common';
import { TypicodePostsController } from './typicode-posts.controller';
import { TypicodePostsService } from './typicode-posts.service';

@Module({
  imports: [
    BullModule.registerQueue({
      defaultJobOptions: {
        attempts: 3,
        backoff: { type: 'exponential', delay: 1000 },
        removeOnComplete: true,
      },
      name: 'typicode-posts',
    }),
  ],
  controllers: [TypicodePostsController],
  providers: [TypicodePostsService],
})
export class TypicodePostsModule {}
