import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Question } from '../schema/questions.schema';
import { QuestionDto } from '../controller/dto/questions.dto';

@Injectable()
export class QuestionsService {
    constructor(@InjectModel(Question.name) private questionModel: Model<Question>) {}

    async create(createQuestionDto: QuestionDto): Promise<Question> {
        const createQuestion = new this.questionModel(createQuestionDto);
        return createQuestion.save();
    }

    async findAll(): Promise<Question[]> {
        return this.questionModel.find().exec();
    }

    async findAllWithLimit(n: number): Promise<Question[]> {
        return this.questionModel
            .find()
            .limit(n)
            .skip(Math.floor(Math.random() * n))
            .exec();
    }
}
