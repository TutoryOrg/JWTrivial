import React from 'react';
import {Screens} from './constants';
import {MenuScreen} from 'screens/MenuScreen';
import {GameScreen} from 'screens/GameScreen';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type MainStackParamList = {
    [Screens.MenuScreen]: undefined;
    [Screens.GameScreen]: {title: string; color: string} | undefined;
};

const MainStack = createNativeStackNavigator<MainStackParamList>();

export const MenuStack = (): JSX.Element => (
    <MainStack.Navigator>
        <MainStack.Screen
            name={Screens.MenuScreen}
            component={MenuScreen}
            options={{headerShown: false}}
        />
        <MainStack.Screen
            name={Screens.GameScreen}
            component={GameScreen}
            options={{headerShown: false}}
        />
    </MainStack.Navigator>
);
