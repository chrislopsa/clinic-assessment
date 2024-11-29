import { Injectable } from '@nestjs/common';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Schedule } from './entities/schedule.entity';

@Injectable()
export class SchedulesService {
  constructor(
    @InjectRepository(Schedule) 
    private readonly schedulesRepository: Repository<Schedule>
  ){}
  
  async create(createScheduleDto: CreateScheduleDto) {
    const newSchedule =  this.schedulesRepository.create(createScheduleDto);
    return await this.schedulesRepository.save(newSchedule);
  }

  findAll() {
    return `This action returns all schedules`;
  }

  async findOne(id: string) {
    return await this.schedulesRepository.findOne({where: {id}})
  }

  async findSchedulesByDoctorId(doctorId: string): Promise<Schedule[]> { 
    return this.schedulesRepository.find({ 
      where: { 
        doctor: { id: doctorId },
       }, 
       relations: ['doctor'],
    });
  }
  update(id: number, updateScheduleDto: UpdateScheduleDto) {
    return `This action updates a #${id} schedule`;
  }

  remove(id: number) {
    return `This action removes a #${id} schedule`;
  }
}
