import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { SigninDto } from './dto/signin.dto';
import { SignupDto } from './dto/signup.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async signup(signupDto: SignupDto) {
    const user = this.userRepository.create(signupDto);
    user.password = bcrypt.hashSync(user.password, 5);
    await this.userRepository.save(user);
    return user;
  }

  async signin(signinDto: SigninDto) {
    const user = await this.userRepository.findOne({
      where: { username: signinDto.username },
    });
    if (!user) throw new UnauthorizedException('Invalid credentials');
    if (!bcrypt.compareSync(signinDto.password, user.password))
      throw new UnauthorizedException('Invalid credentials');
    return user;
  }
}
