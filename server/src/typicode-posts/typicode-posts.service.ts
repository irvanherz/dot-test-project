import { Injectable } from '@nestjs/common';
import { CreateTypicodePostDto } from './dto/create-typicode-post.dto';
import { UpdateTypicodePostDto } from './dto/update-typicode-post.dto';

@Injectable()
export class TypicodePostsService {
  create(createTypicodePostDto: CreateTypicodePostDto) {
    return 'This action adds a new typicodePost';
  }

  findAll() {
    return `This action returns all typicodePosts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typicodePost`;
  }

  update(id: number, updateTypicodePostDto: UpdateTypicodePostDto) {
    return `This action updates a #${id} typicodePost`;
  }

  remove(id: number) {
    return `This action removes a #${id} typicodePost`;
  }
}
