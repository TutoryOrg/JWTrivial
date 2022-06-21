import React from 'react';
import {HomeScreen} from 'screens/HomeScreen';
import {ProfileScreen} from 'screens/ProfileScreen';
import {MenuScreen} from 'screens/MenuScreen';
import {LoginScreen} from 'screens/LoginScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type MainStackParamList = {
    HomeScreen: undefined;
    ProfileScreen: undefined;
    MenuScreen: undefined;
    LoginScreen: undefined;
};

const MainStack = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = (): JSX.Element => {
    return (
        <MainStack.Navigator>
            <MainStack.Screen
                name={'HomeScreen'}
                component={HomeScreen}
                options={{headerShown: false}}
            />

            <MainStack.Screen
                name={'ProfileScreen'}
                component={ProfileScreen}
                options={{headerShown: false}}
            />

            <MainStack.Screen
                name={'MenuScreen'}
                component={MenuScreen}
                options={{headerShown: false}}
            />

            <MainStack.Screen
                name={'LoginScreen'}
                component={LoginScreen}
                options={{headerShown: false}}
            />
        </MainStack.Navigator>
    );
};

export {MainNavigator};
