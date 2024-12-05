import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { StdResponse } from 'src/common/std-response';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  async create(@Body() createPostDto: CreatePostDto) {
    const post = await this.postsService.create(createPostDto);
    return new StdResponse(post);
  }

  @Get()
  async findAll() {
    const posts = await this.postsService.findAll();
    return new StdResponse(posts);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const post = await this.postsService.findOne(id);
    return new StdResponse(post);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updatePostDto: UpdatePostDto) {
    const post = await this.postsService.update(id, updatePostDto);
    return new StdResponse(post);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    const post = await this.postsService.remove(id);
    return new StdResponse(post);
  }
}
