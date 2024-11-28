import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';


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
        entities: [],  
        synchronize: true,
      })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

