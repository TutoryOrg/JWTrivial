import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionsService } from './service/questions.service';
import { QuestionsController } from './controller/questions.controller';
import { Question, QuestionSchema } from './schema/questions.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: Question.name, schema: QuestionSchema }])],
    controllers: [QuestionsController],
    providers: [QuestionsService],
})
export class QuestionsModule {}
