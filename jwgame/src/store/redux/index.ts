import {pointsReducer} from './points';
import {combineReducers, configureStore} from '@reduxjs/toolkit';

const rootReducer = combineReducers({points: pointsReducer});

export type RootState = ReturnType<typeof rootReducer>;
export const store = configureStore({reducer: rootReducer});
