import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Points {
    correct: number;
    wrong: number;
}

const initialState: Points = {correct: 0, wrong: 0};

const pointsSlice = createSlice({
    name: 'points',
    initialState,
    reducers: {
        setPoints(state, action: PayloadAction<Points>) {
            state.wrong = action.payload.wrong;
            state.correct = action.payload.correct;
        },
        resetPoints(state) {
            state.wrong = 0;
            state.correct = 0;
        },
        setCorrectPoints(state, action: PayloadAction<number>) {
            state.correct = action.payload;
        },
        setWrongPoints(state, action: PayloadAction<number>) {
            state.wrong = action.payload;
        },
    },
});

export const {setPoints, resetPoints, setCorrectPoints, setWrongPoints} = pointsSlice.actions;
export const pointsReducer = pointsSlice.reducer;
