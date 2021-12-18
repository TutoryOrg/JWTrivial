import React from 'react';
import {HomeScreen} from '../screens/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProfileScreen} from '../screens/ProfileScreen';

export type MainStackParamList = {
  HomeScreen: undefined;
  ProfileScreen: undefined;
};

const MainStack = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name={'HomeScreen'}
        component={HomeScreen}
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
