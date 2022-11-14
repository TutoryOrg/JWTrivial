import {useEffect, useState} from 'react';
import {QuestionEntry} from '@types';

interface IuseQuestions {
    typeQuestion: string;
}

export function useQuestions({typeQuestion}: IuseQuestions): QuestionEntry[] {
    const [questions, setQuestions] = useState<QuestionEntry[]>([]);

    useEffect(() => {
        async function fetchQuestions() {
            const res = await fetch(`http://localhost:3001/questions/${typeQuestion}`)
                .then(response => response.json())
                .catch(error => {
                    setQuestions([]);
                    throw error;
                });
            setQuestions(res);
        }

        fetchQuestions();
    }, []);

    return questions;
}
