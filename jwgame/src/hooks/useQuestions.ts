import {QuestionEntry} from '@types';
import {useEffect, useState} from 'react';

interface IuseQuestions {
    typeQuestion: string;
}

export function useQuestions({typeQuestion}: IuseQuestions): (boolean | QuestionEntry[])[] {
    const [questions, setQuestions] = useState<QuestionEntry[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        async function fetchQuestions() {
            try {
                setLoading(true);
                const res = await fetch(`http://localhost:3001/questions/${typeQuestion}`)
                    .then(response => response.json())
                    .catch(e => {
                        throw e;
                    });
                setQuestions(res);
                setLoading(false);
            } catch (e) {
                setError(true);
                setQuestions([]);
            }
        }

        fetchQuestions();
        return () => {
            setQuestions([]);
            setError(false);
            setLoading(false);
        };
    }, []);

    return [questions, loading, error];
}
