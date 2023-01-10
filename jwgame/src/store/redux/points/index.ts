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
        addWrongPoints(state) {
            state.wrong = state.wrong + 1;
        },
        addCorrectPoints(state) {
            state.correct = state.correct + 1;
        },
    },
});

export const {setPoints, resetPoints, addCorrectPoints, addWrongPoints} = pointsSlice.actions;
export const pointsReducer = pointsSlice.reducer;
