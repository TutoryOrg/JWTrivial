import React from 'react';
import {Screens} from './constants';
import {GameScreen} from 'screens/GameScreen';
import {HomeScreen} from 'screens/HomeScreen';
import {BottomNavigator} from './BottomNavigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type MainStackParamList = {
    [Screens.HomeScreen]: undefined;
    [Screens.BottomNavigator]: undefined;
    [Screens.GameScreen]: {title: string; color: string} | undefined;
};

const MainStack = createNativeStackNavigator<MainStackParamList>();

export const MainNavigator = (): JSX.Element => (
    <MainStack.Navigator>
        <MainStack.Screen
            name={Screens.HomeScreen}
            component={HomeScreen}
            options={{headerShown: false}}
        />

        <MainStack.Screen
            name={Screens.GameScreen}
            component={GameScreen}
            options={{headerShown: false}}
        />

        <MainStack.Screen
            name={Screens.BottomNavigator}
            component={BottomNavigator}
            options={{headerShown: false}}
        />
    </MainStack.Navigator>
);
