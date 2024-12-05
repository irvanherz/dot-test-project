import { AutomapperModule } from '@automapper/nestjs';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersController } from './users.controller';
import { UsersProfile } from './users.profile';
import { UsersService } from './users.service';

@Module({
  imports: [AutomapperModule, TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService, UsersProfile],
})
export class UsersModule {}
