import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    TypeOrmModule.forRoot({
        type: 'mysql',
        host: process.env.DB_HOST, 
        port: parseInt(process.env.DB_PORT, 10),
        username: process.env.DB_USER , 
        password: process.env.DB_PASS , 
        database: process.env.DB_NAME , 
        entities: [__dirname + '/**/*.entity{.ts,.js}', User],  
        synchronize: true,
      }),
    UsersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

