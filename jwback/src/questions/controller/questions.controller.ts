import { Controller, Get, Param } from '@nestjs/common';
import { QuestionsService } from '../service/questions.service';
import { Question } from '../schema/questions.schema';

@Controller('questions')
export class QuestionsController {
    constructor(private readonly questionsService: QuestionsService) {}

    @Get('getQuestions')
    public async getQuestions(): Promise<Question[]> {
        const result = await this.questionsService.findAll();
        return result;
    }

    @Get(':n')
    public async getQuestionsByNumber(@Param() param): Promise<Question[]> {
        const result = await this.questionsService.findAll();
        return result;
    }
}
