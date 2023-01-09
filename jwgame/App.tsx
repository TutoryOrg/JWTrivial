/**
 * @author stalynAlejandro
 */

import 'react-native-gesture-handler';
import React from 'react';
import {useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {lightTheme, darkTheme} from './src/themes';
import {MainNavigator} from 'navigation/MainNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {rxstore} from 'store/redux/rxstore';
import {Provider} from 'react-redux';
// import StorybookUIRoot from './.ondevice/Storybook';
// import Config from 'react-native-config';

const App = (): JSX.Element => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <Provider store={rxstore}>
            <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
                <NavigationContainer>
                    <MainNavigator />
                </NavigationContainer>
            </ThemeProvider>
        </Provider>
    );
};

// export default Config.STORYBOOK_MODE === 'true' ? StorybookUIRoot : App;
export default App;
