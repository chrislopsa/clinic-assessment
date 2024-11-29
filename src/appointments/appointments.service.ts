import { Injectable } from '@nestjs/common';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Schedule } from 'src/schedules/entities/schedule.entity';
import { Repository } from 'typeorm';
import { SchedulesService } from 'src/schedules/schedules.service';
import { Appointment } from './entities/appointment.entity';

@Injectable()
export class AppointmentsService {
  constructor(
    @InjectRepository(Appointment)
    private appointmentRepository: Repository<Appointment>,
    private readonly scheduleService: SchedulesService,
  ){}
  
  async create(createAppointmentDto: CreateAppointmentDto) {
    const doctor = await this.scheduleService.findOne(createAppointmentDto.doctor)
    console.log(doctor);
    
    return 'This action adds a new appointment';
  }

  findAll() {
    return `This action returns all appointments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} appointment`;
  }

  update(id: number, updateAppointmentDto: UpdateAppointmentDto) {
    return `This action updates a #${id} appointment`;
  }

  remove(id: number) {
    return `This action removes a #${id} appointment`;
  }
}

function verifyAvailavility(hour: number, schedule: string[]){
  if(hour < 0 || hour >= schedule.length -1){
    throw new Error('la hora no puede ser menor a cero ni mayor a 23')
  }
  if(schedule[hour] === 'D'){
    return 'disponible'
  }else if(schedule[hour] === 'A'){
    return 'ya asignada'
  }else {
    return 'no disponible'
  }
}