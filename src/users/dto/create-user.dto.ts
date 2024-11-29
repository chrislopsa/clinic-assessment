import { IsEmail, IsEnum, IsString } from "class-validator";

enum UserRole { 
  DOCTOR = 'doctor', 
  PATIENT = 'patient', 
 }

export class CreateUserDto {
    @IsString()
    userName: string;
  
    @IsEmail()
    email: string;
  
    @IsString()
    password: string;
  
    @IsEnum(UserRole, { message: 'role must be a valid enum value', })
    role: UserRole;
  }

