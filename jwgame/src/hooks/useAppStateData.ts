import {useEffect, useState} from 'react';
import {RootState} from 'store/redux';
import {setUser} from 'store/redux/user';
import {setPoints} from 'store/redux/points';
import {KEY_CONSTANTS} from 'store/async/constants';
import {useDispatch, useSelector} from 'react-redux';
import {useAppState} from '@react-native-community/hooks';
import AsyncStorage from '@react-native-async-storage/async-storage';

enum APP_STATE {
    BACKGROUND = 'background',
    ACTIVE = 'active',
}

export function useAppStateData(): void {
    const dispatch = useDispatch();
    const appState = useAppState();

    const [enterApp, setEnterApp] = useState<boolean>(false);

    const user = useSelector((state: RootState) => state.user);
    const points = useSelector((state: RootState) => state.points);

    const getValues = async () => {
        console.log('getValues');
        let values;
        try {
            values = await AsyncStorage.multiGet([
                KEY_CONSTANTS.USER_NAME,
                KEY_CONSTANTS.USER_EMAIL,
                KEY_CONSTANTS.TOTAL_WRONG_POINTS,
                KEY_CONSTANTS.TOTAL_CORRECT_POINTS,
            ]);
        } catch (e) {
            console.error(e);
        }
        const name = values[0][1];
        const wrong = values[2][1];
        const correct = values[3][1];
        dispatch(setUser({name: name, email: 'email'}));
        dispatch(setPoints({correct: correct, wrong: wrong}));
    };

    const setValues = async () => {
        console.log('setValues');
        const userName: [string, string] = [KEY_CONSTANTS.USER_NAME, user.name];
        const userEmail: [string, string] = [KEY_CONSTANTS.USER_EMAIL, user.email];
        const correctPoints: [string, string] = [
            KEY_CONSTANTS.TOTAL_CORRECT_POINTS,
            points.correct.toString(),
        ];
        const wrongPoints: [string, string] = [
            KEY_CONSTANTS.TOTAL_WRONG_POINTS,
            points.wrong.toString(),
        ];

        try {
            await AsyncStorage.multiSet([userName, userEmail, correctPoints, wrongPoints]);
        } catch (e) {
            console.error(e);
        }
    };

    console.log({appState});
    if (appState === APP_STATE.ACTIVE && !enterApp) {
        console.log({appState});
        setEnterApp(true);
        getValues();
    }
    if (appState === APP_STATE.BACKGROUND) {
        console.log({appState});
        setValues();
    }
}
