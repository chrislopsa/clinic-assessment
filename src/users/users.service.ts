import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User)
  private readonly userRepository: Repository<User>
){}

  async create(createUserDto: CreateUserDto) {
    try {
      const userFound = await this.userRepository.findOne({
        where:{
          email: createUserDto.email
        }
      })

      if(userFound){
        return new HttpException('User already exists', HttpStatus.CONFLICT)
    }
    const newUser = this.userRepository.create(createUserDto)
    return await this.userRepository.save(newUser)
    } catch (error) {
      console.log(error);
    }
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOneByEmail(email: string) {
    try {
      return await this.userRepository.findOne({
        where: {
          email: email
        }
      })
    } catch (error) {
      console.log(error);
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
