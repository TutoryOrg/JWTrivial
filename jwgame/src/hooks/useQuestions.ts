import {QuestionEntry} from '@types';
import {useEffect, useState} from 'react';

interface IuseQuestions {
    typeQuestion: string;
}

export function useQuestions({typeQuestion}: IuseQuestions): (boolean | QuestionEntry[])[] {
    const [questions, setQuestions] = useState<QuestionEntry[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        async function fetchQuestions() {
            setLoading(true);
            const res = await fetch(`http://localhost:3001/questions/${typeQuestion}`)
                .then(response => response.json())
                .catch(error => {
                    setQuestions([]);
                    throw error;
                });
            setQuestions(res);
            setLoading(false);
        }

        fetchQuestions();
        return () => {
            setQuestions([]);
            setLoading(false);
        };
    }, []);

    return [questions, loading];
}
