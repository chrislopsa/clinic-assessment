import { IsNumber, IsString } from "class-validator";

export class CreateAppointmentDto {
    @IsString()
    doctor: string;

    @IsString()
    patient: string;

    @IsNumber()
    hour: number;

    @IsString()
    specialty: string;

    @IsString()
    reason: string;
}
