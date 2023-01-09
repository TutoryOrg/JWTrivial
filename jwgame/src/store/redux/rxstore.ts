import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {pointsReducer} from './points/poinstSlice';

const rootReducer = combineReducers({points: pointsReducer});

export type RootState = ReturnType<typeof rootReducer>;
export const rxstore = configureStore({reducer: rootReducer});
