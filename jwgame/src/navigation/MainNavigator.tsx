import React from 'react';
import {Screens} from './constants';
import {HomeScreen} from 'screens/HomeScreen';
import {GameScreen} from 'screens/GameScreen';
import {MenuScreen} from 'screens/MenuScreen';
import {LoginScreen} from 'screens/LoginScreen';
import {SettingsScreen} from 'screens/SettingsScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProfileScreen} from 'screens/ProfileScreen';

export type MainStackParamList = {
    [Screens.HomeScreen]: undefined;
    [Screens.MenuScreen]: undefined;
    [Screens.LoginScreen]: undefined;
    [Screens.ProfileScreen]: undefined;
    [Screens.SettingsScreen]: undefined;
    [Screens.GameScreen]: {title: string; color: string} | undefined;
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
            name={Screens.SettingsScreen}
            component={SettingsScreen}
            options={{headerShown: false}}
        />

        <MainStack.Screen
            name={Screens.ProfileScreen}
            component={ProfileScreen}
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
