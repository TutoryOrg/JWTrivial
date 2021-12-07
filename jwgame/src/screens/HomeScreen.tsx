import React from 'react';
import {Text, View, Button} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CompositeScreenProps} from '@react-navigation/native';

import {GameStackParamList} from '@src/navigation/GameNavigator';
import {MainStackParamList} from '@src/navigation/MainNavigator';

type HomeNavProp = CompositeScreenProps<
  NativeStackScreenProps<GameStackParamList, 'HomeScreen'>,
  NativeStackScreenProps<MainStackParamList>
>;

function HomeScreen({route, navigation}: HomeNavProp) {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go To Detail"
        onPress={() => navigation.navigate('ProfileScreen')}
      />
    </View>
  );
}

export {HomeScreen};
