import React from 'react';
import {HomeScreen} from 'screens/HomeScreen';
import {ProfileScreen} from 'screens/ProfileScreen';
import {MenuScreen} from 'screens/MenuScreen';
import {LoginScreen} from 'screens/LoginScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screens} from './constants';

export type MainStackParamList = {
    [Screens.HomeScreen]: undefined;
    [Screens.ProfileScreen]: undefined;
    [Screens.MenuScreen]: undefined;
    [Screens.LoginScreen]: undefined;
};

const MainStack = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = (): JSX.Element => {
    return (
        <MainStack.Navigator>
            <MainStack.Screen
                name={Screens.HomeScreen}
                component={HomeScreen}
                options={{headerShown: false}}
            />

            <MainStack.Screen
                name={Screens.ProfileScreen}
                component={ProfileScreen}
                options={{headerShown: false}}
            />

            <MainStack.Screen
                name={Screens.MenuScreen}
                component={MenuScreen}
                options={{headerShown: false}}
            />

            <MainStack.Screen
                name={Screens.LoginScreen}
                component={LoginScreen}
                options={{headerShown: false}}
            />
        </MainStack.Navigator>
    );
};

export {MainNavigator};
