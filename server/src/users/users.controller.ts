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
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const user = await this.usersService.create(createUserDto);
    return new StdResponse(user);
  }

  @Get()
  async findAll() {
    const users = await this.usersService.findAll();
    return new StdResponse(users);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const user = await this.usersService.findOne(id);
    return new StdResponse(user);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    const user = await this.usersService.update(id, updateUserDto);
    return new StdResponse(user);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    const user = await this.usersService.remove(id);
    return new StdResponse(user);
  }
}
