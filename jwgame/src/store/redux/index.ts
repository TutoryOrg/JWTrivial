import {userReducer} from './user';
import {useDispatch} from 'react-redux';
import {pointsReducer} from './points';
import {
    AnyAction,
    CombinedState,
    combineReducers,
    configureStore,
    ThunkDispatch,
} from '@reduxjs/toolkit';

export const rootReducer = combineReducers({user: userReducer, points: pointsReducer});
export const emptyStore = configureStore({reducer: rootReducer});

const _getDispatch = () => emptyStore.dispatch;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ReturnType<typeof _getDispatch>;

export const useAppDispatch = (): ThunkDispatch<CombinedState<RootState>, undefined, AnyAction> =>
    useDispatch<AppDispatch>();
