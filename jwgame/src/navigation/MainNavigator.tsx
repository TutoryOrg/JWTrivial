import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from 'screens/HomeScreen';
import {MenuScreen} from 'screens/MenuScreen';
import {LoginScreen} from 'screens/LoginScreen';
import {GameScreen} from 'screens/GameScreen';
import {Screens} from './constants';

export type MainStackParamList = {
    [Screens.HomeScreen]: undefined;
    [Screens.ProfileScreen]: undefined;
    [Screens.MenuScreen]: undefined;
    [Screens.LoginScreen]: undefined;
    [Screens.GameScreen]: {title: string} | undefined;
};

const MainStack = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = (): JSX.Element => (
    <MainStack.Navigator>
        <MainStack.Screen
            name={Screens.HomeScreen}
            component={HomeScreen}
            options={{headerShown: false}}
        />

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

        <MainStack.Screen
            name={Screens.LoginScreen}
            component={LoginScreen}
            options={{headerShown: false}}
        />
    </MainStack.Navigator>
);

export {MainNavigator};
