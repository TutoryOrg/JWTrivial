import React from 'react';
import {HomeScreen} from '../screens/HomeScreen';
import {ProfileScreen} from '../screens/ProfileScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type GameStackParamList = {
  HomeScreen: undefined;
};

const GameStack = createNativeStackNavigator<GameStackParamList>();

const Game = () => {
  return (
    <GameStack.Navigator>
      <GameStack.Screen
        name={'HomeScreen'}
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </GameStack.Navigator>
  );
};
export {Game};
