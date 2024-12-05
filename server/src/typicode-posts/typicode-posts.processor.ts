import { Processor } from '@nestjs/bullmq';
import { Job } from 'bullmq';
import { TypycodePostsJobDto } from './dto/typicode-posts-job.dto';
import { TypicodePostsService } from './typicode-posts.service';

@Processor('typicode-posts')
export class TypicodePostsProcessor {
  constructor(private readonly typostService: TypicodePostsService) {}
  async process(job: Job<TypycodePostsJobDto>) {
    const { action, data } = job.data;
    switch (action) {
      case 'create':
        return this.typostService.create(data);
      case 'update':
        return this.typostService.update(data);
      case 'delete':
        return this.typostService.delete(data);
      default:
        throw new Error('Invalid action');
    }
  }
}
