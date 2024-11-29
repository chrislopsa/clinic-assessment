import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, doctor => doctor.appointments)
  doctor: User;

  @ManyToOne(() => User, patient => patient.appointments)
  patient: User;

  @Column()
  hour: number;

  @Column()
  specialty: string;

  @Column()
  reason: string;
}


