import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface User {
    name: string;
    email: string;
}

const initialState: User = {name: '', email: ''};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<User>) {
            state.name = action.payload.name;
            state.email = action.payload.email;
        },
        setUserName(state, action: PayloadAction<string>) {
            state.name = action.payload;
        },
        setUserEmail(state, action: PayloadAction<string>) {
            state.email = action.payload;
        },
    },
});

export const {setUser, setUserName, setUserEmail} = userSlice.actions;
export const userReducer = userSlice.reducer;
