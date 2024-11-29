import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService{
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        private readonly jwtService: JwtService,
    ){}

    async login(email: string, password: string){
        const user = await this.userRepository.findOne({where: {email}});

        if(!user || password !== user.password){
            throw new UnauthorizedException('invalid credentials');
        }

        const payload = {sub: user.email, name: user.userName};
        return{
            access_token: this.jwtService.sign(payload)
        }
    }
}