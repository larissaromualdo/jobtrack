import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose'
import { Model, Types } from 'mongoose'
import { Application, ApplicationDocument } from './application.schema'
import { CreateApplicationDto } from './dto/create-application.dto'
import { UpdateApplicationDto } from './dto/update-application.dto'


@Injectable()
export class ApplicationsService {
    constructor(
        @InjectModel(Application.name) private appModel: Model<ApplicationDocument>,
    ) {}

    create(data: CreateApplicationDto) {
        return this.appModel.create({
             ...data, 
             applicationDate: new Date(data.applicationDate),
        })
    }

    findAll() {
        return this.appModel.find().sort({ createdAt: -1 }).exec()
    }
    
    async findOne(id: string) {
        this.ensureObjectId(id)
        const found = await this.appModel.findById(id).exec()
        if (!found) {
         throw new NotFoundException('Application not found')
        }
        return found
    }

    async update(id:string, data: UpdateApplicationDto) {
    this.ensureObjectId(id)
    const payload = data.applicationDate 
    ? { ...data, applicationDate: new Date(data.applicationDate) }
    : data
    

    const updated = await this.appModel
    .findByIdAndUpdate(id, payload, { new:true, runValidators: true })
    .exec()

    if(!updated) throw new NotFoundException('Application not found')
    return updated
}

async remove(id: string) {
    this.ensureObjectId(id)
    const removed = await this.appModel.findByIdAndDelete(id).exec()
    if (!removed) throw new NotFoundException('Application not found')
        return removed
}

private ensureObjectId(id: string) {
    if (!Types.ObjectId.isValid(id)) {
        throw new BadRequestException('Invalid id')
    }
}
}