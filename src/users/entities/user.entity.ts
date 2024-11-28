import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users') 
export class User {
  @PrimaryGeneratedColumn() 
  id: number;

  @Column({ type: 'varchar', length: 100 }) 
  userName: string;

  @Column({ type: 'varchar', length: 150, unique: true}) 
  email: string;

  @Column({ type: 'varchar', length: 255 }) 
  password: string;

  @Column({ default: 'user' })
  role: string;
}
