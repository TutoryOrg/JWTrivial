import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type QuestionDocument = HydratedDocument<Question>;

export type TypeQuestion = 'whowas' | 'whosaid' | 'history' | 'prophecies';

class Option {
    @Prop({ required: true })
    A: string;

    @Prop({ required: true })
    B: string;

    @Prop({ required: true })
    C: string;
}

@Schema()
export class Question {
    @Prop({ required: true })
    typeQuestion: TypeQuestion;

    @Prop({ required: true })
    question: string;

    @Prop({ required: true })
    correctAnswer: string;

    @Prop({ required: true })
    clue: string;

    @Prop({ required: true })
    options: Option;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
