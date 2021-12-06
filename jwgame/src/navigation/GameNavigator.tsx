import React from 'react';
import {Home} from '../screens/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const GameStack = createNativeStackNavigator();

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
export {Game};
