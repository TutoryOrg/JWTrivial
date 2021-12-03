/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './src/screens/Home';
import {Profile} from './src/screens/Profile';

const GameStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

const Game = () => {
  return (
    <GameStack.Navigator>
      <GameStack.Screen
        name={'Home'}
        component={Home}
        options={{headerShown: false}}
      />
    </GameStack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen
          name={'Game'}
          component={Game}
          options={{headerShown: false}}
        />
        <HomeStack.Screen
          name={'Profile'}
          component={Profile}
          options={{headerShown: true, presentation: 'modal'}}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
