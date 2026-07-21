import { IsDateString, IsEnum, IsOptional, IsString, IsUrl } from 'class-validator'
import { ApplicationStatus } from '../application.schema'

export class UpdateApplicationDto {
    @IsString()
    @IsOptional()
    company?: string 

     @IsString()
    @IsOptional()
    position?: string 

     @IsString()
    @IsOptional()
    location?: string 

     @IsString()
    @IsOptional()
    jobType?: string 

    @IsEnum(ApplicationStatus)
    @IsOptional()
    status?: ApplicationStatus

     @IsDateString()
    @IsOptional()
    applicationDate?: string

    @IsUrl()
    @IsOptional()
    jobLink?: string

     @IsString()
    @IsOptional()
    notes?: string 
}