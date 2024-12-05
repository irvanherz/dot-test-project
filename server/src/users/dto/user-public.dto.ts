import { AutoMap } from '@automapper/classes';

export class UserPublic {
  @AutoMap()
  id: number;

  @AutoMap()
  username: string;

  @AutoMap()
  fullName: string;

  @AutoMap()
  createdAt: Date;

  @AutoMap()
  updatedAt: Date;
}
