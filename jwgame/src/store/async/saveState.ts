import {RootState} from 'store/redux';
import {KEY_CONSTANTS} from './constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveState = async (state: RootState): Promise<void> => {
    try {
        const serializedSate = JSON.stringify(state);
        await AsyncStorage.setItem(KEY_CONSTANTS.STATE, serializedSate);
    } catch (e) {
        console.log(e);
    }
};
