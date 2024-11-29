import { Appointment } from 'src/appointments/entities/appointment.entity';
import { Schedule } from 'src/schedules/entities/schedule.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne } from 'typeorm';

@Entity('users') 
export class User {
  @PrimaryGeneratedColumn('uuid') 
  id: string;

  @Column({ type: 'varchar', length: 100 }) 
  userName: string;

  @Column({ type: 'varchar', length: 150, unique: true}) 
  email: string;

  @Column({ type: 'varchar', length: 255 }) 
  password: string;

  @Column({ type: 'enum', enum: ['doctor', 'patient'], default: 'patient' })
  role: 'doctor' | 'patient';

  @OneToOne(() => Schedule, (schedule) => schedule.doctor, { nullable: true })
  schedule?: Schedule;

  @OneToMany(() => Appointment, (appointment) => appointment.doctor) appointments: Appointment[];
}


