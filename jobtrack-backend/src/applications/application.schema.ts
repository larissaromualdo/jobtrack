import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export enum ApplicationStatus {
    Applied = 'Applied',
    Interview= 'Interview',
    Rejected = 'Rejected',
    Approved = 'Approved',
}

export type ApplicationDocument = Application & Document

@Schema({ timestamps: true })
export class Application {
    @Prop({ required: true }) company: string
    @Prop({ required: true }) position: string
    @Prop({ required: true }) location: string
    @Prop({ required: true }) jobType: string
    @Prop({required:true, enum: ApplicationStatus }) status: ApplicationStatus
    @Prop({ type: Date, required:true }) applicationDate: Date
    @Prop() jobLink: string
    @Prop() notes: string
}

export const ApplicationSchema = SchemaFactory.createForClass(Application)