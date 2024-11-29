import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Schedule } from 'src/schedules/entities/schedule.entity';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class ScheduleService {
//   constructor(
//     @InjectRepository(Schedule)
//     private readonly scheduleRepository: Repository<Schedule>,
//     @InjectRepository(User)
//     private readonly userRepository: Repository<User>,
//   ) {}

//   // Actualizar el array de disponibilidad
//   async updateDailyAvailability(doctorId: number, date: string, availability: string[]): Promise<Schedule> {
//     if (availability.length !== 24) {
//       throw new BadRequestException('El array de disponibilidad debe tener 24 posiciones.');
//     }

//     const doctor = await this.userRepository.findOne({ where: { id: doctorId, role: 'doctor' } });
//     if (!doctor) {
//       throw new BadRequestException('El usuario debe ser un doctor.');
//     }

//     let schedule = await this.scheduleRepository.findOne({ where: { doctor, date } });
//     if (!schedule) {
//       schedule = this.scheduleRepository.create({ doctor, date, availability });
//     } else {
//       schedule.availability = availability;
//     }

//     return this.scheduleRepository.save(schedule);
//   }

//   // Verificar disponibilidad en una hora específica
//   async isHourAvailable(doctorId: number, date: string, hour: number): Promise<boolean> {
//     if (hour < 0 || hour > 23) {
//       throw new BadRequestException('La hora debe estar entre 0 y 23.');
//     }

//     const schedule = await this.scheduleRepository.findOne({ where: { doctor: { id: doctorId }, date } });
//     if (!schedule) {
//       throw new BadRequestException('No hay horario configurado para este médico en esta fecha.');
//     }

//     return schedule.availability[hour] === 'D';
//   }

//   // Reservar una hora para una cita
//   async reserveHour(doctorId: number, date: string, hour: number): Promise<Schedule> {
//     if (hour < 0 || hour > 23) {
//       throw new BadRequestException('La hora debe estar entre 0 y 23.');
//     }

//     const schedule = await this.scheduleRepository.findOne({ where: { doctor: { id: doctorId }, date } });
//     if (!schedule) {
//       throw new BadRequestException('No hay horario configurado para este médico en esta fecha.');
//     }

//     if (schedule.availability[hour] !== 'D') {
//       throw new BadRequestException('La hora no está disponible.');
//     }

//     schedule.availability[hour] = 'A';
//     return this.scheduleRepository.save(schedule);
//   }
}
