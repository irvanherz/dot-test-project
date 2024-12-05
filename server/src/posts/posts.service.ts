import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}
  async create(createPostDto: CreatePostDto) {
    const post = await this.postRepository.save(createPostDto);
    return post;
  }

  async findAll() {
    const posts = await this.postRepository.find();
    return posts;
  }

  async findOne(id: number) {
    const post = await this.postRepository.findOne({ where: { id } });
    return post;
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    const post = await this.postRepository.findOne({ where: { id } });
    Object.keys(updatePostDto).forEach((key) => {
      if (updatePostDto[key] !== undefined) {
        post[key] = updatePostDto[key];
      }
    });
    await this.postRepository.save(post);
    return post;
  }

  async remove(id: number) {
    const post = await this.postRepository.findOne({ where: { id } });
    await this.postRepository.remove(post);
    return post;
  }
}
