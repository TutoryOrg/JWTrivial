/**
 * @author stalynAlejandro
 */

import 'react-native-gesture-handler';
import React from 'react';
import {ThemeProvider} from 'styled-components';
import {useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {MainNavigator} from './src/navigation/MainNavigator';
import {lightTheme, darkTheme} from './src/themes';
import StorybookUIRoot from './.ondevice/Storybook';
import Config from 'react-native-config';

// Config.API_URL; // 'https://myapi.com'
// Config.GOOGLE_MAPS_API_KEY; // 'abcdefgh'

const App = (): JSX.Element => {
    const isDarkMode = useColorScheme() === 'dark';
    console.log(Config);
    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <NavigationContainer>
                <MainNavigator />
            </NavigationContainer>
        </ThemeProvider>
    );
};

export default Config.STORYBOOK_MODE ? StorybookUIRoot : App;
