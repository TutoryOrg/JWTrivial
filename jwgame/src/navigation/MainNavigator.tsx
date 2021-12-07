import React from 'react';
import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Game, GameStackParamList} from './GameNavigator';
import {ProfileScreen} from '../screens/ProfileScreen';

export type MainStackParamList = {
  GameStack: NavigatorScreenParams<GameStackParamList>;
  ProfileScreen: {userId: string};
};

const MainStack = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name={'GameStack'}
        component={Game}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name={'ProfileScreen'}
        component={ProfileScreen}
        options={{headerShown: false}}
      />
    </MainStack.Navigator>
  );
};

export {MainNavigator};
