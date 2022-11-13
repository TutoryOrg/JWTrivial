export type CorrectAnswer = 'A' | 'B' | 'C';

export interface QuestionEntry {
    typeQuestion: string;
    question: string;
    correctAnswer: CorrectAnswer;
    clue: string;
    options: {
        A: string;
        B: string;
        C: string;
    };
}

// Types y Interfaces muchas veces son intercambiables
// Las interfaces estan pensadas para ser extendidas
// En tipos no seria extender sino crear otra interfaz
