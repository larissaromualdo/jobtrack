import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ApplicationsModule } from './applications/applications.module'

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/jobtrack'),
      ApplicationsModule,
  ],
})

export class AppModule {}
