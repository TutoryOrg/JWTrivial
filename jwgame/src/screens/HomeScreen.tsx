import React from 'react';
import {Text, View, Button} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CompositeScreenProps} from '@react-navigation/native';

import {GameStackParamList} from '@src/navigation/GameNavigator';
import {MainStackParamList} from '@src/navigation/MainNavigator';
import {useTranslation} from 'react-i18next';

type HomeNavProp = CompositeScreenProps<
  NativeStackScreenProps<GameStackParamList, 'HomeScreen'>,
  NativeStackScreenProps<MainStackParamList>
>;

function HomeScreen({route, navigation}: HomeNavProp) {
  const {i18n} = useTranslation();
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go To Detail"
        onPress={() => navigation.navigate('ProfileScreen')}
      />
      <Button
        title="Change Language"
        onPress={() => i18n.changeLanguage('fr')}
      />
      <Button
        title="Change Language"
        onPress={() => i18n.changeLanguage('en')}
      />
    </View>
  );
}

export {HomeScreen};
