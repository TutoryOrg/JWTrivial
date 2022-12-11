import React from 'react';
import {Screens} from './constants';
import {MenuStack} from './MenuStack';
import {gridSizes} from 'utils/constants';
import {scale} from 'utils/scaleFunctions';
import {useTranslation} from 'react-i18next';
import {ProfileScreen} from 'screens/ProfileScreen';
import {SettingsScreen} from 'screens/SettingsScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import styled from 'styled-components/native';

const Tab = createBottomTabNavigator();

export const BottomIcon = styled.Image`
    width: ${scale(gridSizes.grid4x)}px;
    height: ${scale(gridSizes.grid4x)}px;
`;

export function BottomNavigator(): JSX.Element {
    const {t} = useTranslation();
    return (
        <Tab.Navigator>
            <Tab.Screen
                name={Screens.MenuStack}
                component={MenuStack}
                options={{
                    headerShown: false,
                    tabBarLabel: t('menu'),
                    tabBarIcon: ({focused}) =>
                        focused ? (
                            <BottomIcon source={require('assets/icons/home_active.png')} />
                        ) : (
                            <BottomIcon source={require('assets/icons/home.png')} />
                        ),
                }}
            />
            <Tab.Screen
                name={Screens.SettingsScreen}
                component={SettingsScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: t('settings'),
                    tabBarIcon: ({focused}) =>
                        focused ? (
                            <BottomIcon source={require('assets/icons/settings_active.png')} />
                        ) : (
                            <BottomIcon source={require('assets/icons/settings.png')} />
                        ),
                }}
            />
            <Tab.Screen
                name={Screens.ProfileScreen}
                component={ProfileScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: t('profile'),
                    tabBarIcon: ({focused}) =>
                        focused ? (
                            <BottomIcon source={require('assets/icons/user_active.png')} />
                        ) : (
                            <BottomIcon source={require('assets/icons/user.png')} />
                        ),
                }}
            />
        </Tab.Navigator>
    );
}
