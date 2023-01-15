import {RootState} from 'store/redux';
import {KEY_CONSTANTS} from './constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loadState = async (): Promise<RootState | undefined> => {
    try {
        const savedState = await AsyncStorage.getItem(KEY_CONSTANTS.STATE);
        if (savedState) return JSON.parse(savedState);
    } catch (e) {
        console.log(e);
    }
    return;
};
