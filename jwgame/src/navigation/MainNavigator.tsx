import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Game} from './GameNavigator';
import {Profile} from '../screens/Profile';

const HomeStack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={'Game'}
        component={Game}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name={'Profile'}
        component={Profile}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
};

export {MainNavigator};
