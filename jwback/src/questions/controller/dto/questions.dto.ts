import { TypeQuestion } from 'src/questions/schema/questions.schema';
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';

export class QuestionDto {
    @IsString()
    @IsNotEmpty()
    typeQuestion: TypeQuestion;

    @IsString()
    @IsNotEmpty()
    question: string;

    @IsString()
    @IsNotEmpty()
    correctAnswer: string;

    @IsString()
    @IsNotEmpty()
    clue: string;

    @ValidateNested()
    options: Options;
}

export class Options {
    @IsNotEmpty()
    @IsString()
    A: string;

    @IsNotEmpty()
    @IsString()
    B: string;

    @IsNotEmpty()
    @IsString()
    C: string;
}
