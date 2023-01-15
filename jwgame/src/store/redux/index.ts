import {userReducer} from './user';
import {pointsReducer} from './points';
import {useDispatch} from 'react-redux';
import {
    AnyAction,
    CombinedState,
    combineReducers,
    configureStore,
    ThunkDispatch,
} from '@reduxjs/toolkit';

export const rootReducer = combineReducers({user: userReducer, points: pointsReducer});

export const emptyStore = configureStore({reducer: rootReducer});

function _getDispatch() {
    return emptyStore.dispatch;
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ReturnType<typeof _getDispatch>;

export const useAppDispatch = (): ThunkDispatch<CombinedState<RootState>, undefined, AnyAction> =>
    useDispatch<AppDispatch>();
