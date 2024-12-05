import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserPublic } from './dto/user-public.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectMapper('classes')
    private readonly mapper: Mapper,
  ) {}

  async create(dto: CreateUserDto) {
    dto.password = bcrypt.hashSync(dto.password, 5);
    const user = await this.userRepository.save(dto);
    return this.mapper.map(user, User, UserPublic);
  }

  async findAll() {
    const users = await this.userRepository.find();
    return this.mapper.mapArray(users, User, UserPublic);
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOne({ where: { id } });
    return this.mapper.map(user, User, UserPublic);
  }

  async update(id: number, dto: UpdateUserDto) {
    if (dto.password) dto.password = bcrypt.hashSync(dto.password, 5);
    const user = await this.userRepository.findOne({ where: { id } });
    Object.keys(dto).forEach((key) => {
      if (dto[key] !== undefined) {
        user[key] = dto[key];
      }
    });
    await this.userRepository.save(user);
    return this.mapper.map(user, User, UserPublic);
  }

  async remove(id: number) {
    const user = await this.userRepository.findOne({ where: { id } });
    await this.userRepository.remove(user);
    return this.mapper.map(user, User, UserPublic);
  }
}
