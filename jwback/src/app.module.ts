import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionsModule } from './questions/questions.module';

@Module({
    imports: [QuestionsModule, MongooseModule.forRoot('mongodb://127.0.0.1:27017/jwdb')],
    controllers: [],
    providers: [],
})
export class AppModule {}
