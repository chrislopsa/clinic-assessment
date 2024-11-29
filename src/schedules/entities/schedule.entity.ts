import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Entity('schedules')
export class Schedule {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => User) 
  @JoinColumn()
  doctor: User;

  @Column('json') 
  availability: string[]; // Array de 24 posiciones: 'D', 'A', 'N'
}