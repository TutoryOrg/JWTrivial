import React from 'react';
import {Text, View, Button} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CompositeScreenProps} from '@react-navigation/native';
import {GameStackParamList} from '@navigation/GameNavigator';
import {MainStackParamList} from '@navigation/MainNavigator';
import {useTranslation} from 'react-i18next';

type HomeNavProp = CompositeScreenProps<
  NativeStackScreenProps<GameStackParamList, 'HomeScreen'>,
  NativeStackScreenProps<MainStackParamList>
>;

function HomeScreen({navigation}: HomeNavProp) {
  const {t, i18n} = useTranslation();
  return (
    <View>
      <Text>{t('welcome_home')}</Text>
    </View>
  );
}

export {HomeScreen};
