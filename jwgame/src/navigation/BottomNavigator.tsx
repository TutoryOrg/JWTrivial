import React from 'react';
import {Screens} from './constants';
import {MenuStack} from './MenuStack';
import {SettingsScreen} from 'screens/SettingsScreen';
import {ProfileScreen} from 'screens/ProfileScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export function BottomNavigator(): JSX.Element {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name={Screens.MenuStack}
                component={MenuStack}
                options={{headerShown: false}}
            />
            <Tab.Screen
                name={Screens.SettingsScreen}
                component={SettingsScreen}
                options={{headerShown: false}}
            />
            <Tab.Screen
                name={Screens.ProfileScreen}
                component={ProfileScreen}
                options={{headerShown: false}}
            />
        </Tab.Navigator>
    );
}
