import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
// import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  /*
  async create(сreateUserDto: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(сreateUserDto);
    const { password, ...result } = user;
    const hash = await hashHelpers.createHash(password);
    return await this.userRepository.save({ password: hash, ...result });
  }
  */
}
