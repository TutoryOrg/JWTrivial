import React from 'react';
import {Screens} from './constants';
import {HomeScreen} from 'screens/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BottomNavigator} from './BottomNavigator';

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
            name={Screens.BottomNavigator}
            component={BottomNavigator}
            options={{headerShown: false}}
        />
    </MainStack.Navigator>
);
