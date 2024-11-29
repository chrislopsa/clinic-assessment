import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'TU_SECRETO_JWT', // Reemplazar con variable de entorno
    });
  }

  // async validate(payload: { sub: number, name: string }) {
  //   const user = await this.userRepository.findOne({ 
  //     where: { email: payload.sub } 
  //   });

  //   if (!user) {
  //     throw new UnauthorizedException();
  //   }

  //   return user;
  // }
}