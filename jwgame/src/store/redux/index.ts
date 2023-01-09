import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {pointsReducer} from './points';

const rootReducer = combineReducers({points: pointsReducer});

export type RootState = ReturnType<typeof rootReducer>;
export const store = configureStore({reducer: rootReducer});
