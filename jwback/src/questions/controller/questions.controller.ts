import { Question } from '../schema/questions.schema';
import { QuestionsService } from '../service/questions.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('questions')
export class QuestionsController {
    constructor(private readonly questionsService: QuestionsService) {}

    @Get('getQuestions')
    public async getQuestions(): Promise<Question[]> {
        return await this.questionsService.findAll();
    }

    @Get(':n')
    public async getQuestionsByNumber(@Param() param): Promise<Question[]> {
        return await this.questionsService.findAllWithLimit(param.n);
    }
}
