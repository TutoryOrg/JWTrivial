/**
 * @author stalynAlejandro
 */

import React from 'react';
import {Provider} from 'react-redux';
import {useAppState} from 'hooks/useAppState';
import {MainNavigator} from 'navigation/MainNavigator';
import {ThemeProvider} from 'styled-components';
import {useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {lightTheme, darkTheme} from './src/themes';

const App = (): JSX.Element => {
    const store = useAppState();
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <Provider store={store}>
            <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
                <NavigationContainer>
                    <MainNavigator />
                </NavigationContainer>
            </ThemeProvider>
        </Provider>
    );
};

export default App;
