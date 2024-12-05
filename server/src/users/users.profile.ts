import { createMap, Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { UserPublic } from './dto/user-public.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersProfile extends AutomapperProfile {
  constructor(@InjectMapper('classes') mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, User, UserPublic);
    };
  }
}
