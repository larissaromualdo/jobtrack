import { IsDateString, IsEnum, IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator'
import { ApplicationStatus } from '../application.schema'

export class CreateApplicationDto {
    @IsString()
    @IsNotEmpty()
    company: string

     @IsString()
    @IsNotEmpty()
    position: string
    
     @IsString()
    @IsNotEmpty()
    location: string

     @IsString()
    @IsNotEmpty()
    jobType: string

    @IsEnum(ApplicationStatus)
    status: ApplicationStatus

    @IsDateString()
    applicationDate: string

    @IsUrl()
    @IsOptional()
    jobLink?: string

    @IsString()
    @IsOptional()
    notes?: string
}
