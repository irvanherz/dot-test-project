import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypicodePostsService } from './typicode-posts.service';
import { CreateTypicodePostDto } from './dto/create-typicode-post.dto';
import { UpdateTypicodePostDto } from './dto/update-typicode-post.dto';

@Controller('typicode-posts')
export class TypicodePostsController {
  constructor(private readonly typicodePostsService: TypicodePostsService) {}

  @Post()
  create(@Body() createTypicodePostDto: CreateTypicodePostDto) {
    return this.typicodePostsService.create(createTypicodePostDto);
  }

  @Get()
  findAll() {
    return this.typicodePostsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typicodePostsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypicodePostDto: UpdateTypicodePostDto) {
    return this.typicodePostsService.update(+id, updateTypicodePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typicodePostsService.remove(+id);
  }
}
