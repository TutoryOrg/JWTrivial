import React from 'react';
import {useTranslation} from 'react-i18next';
import {CompositeScreenProps} from '@react-navigation/native';
import {GameStackParamList} from '@navigation/GameNavigator';
import {MainStackParamList} from '@navigation/MainNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  HeaderText,
  SubHeaderText,
  HomeView,
  PlayButton,
  AcceptButton,
} from './HomeScreen.UI';

type HomeNavProp = CompositeScreenProps<
  NativeStackScreenProps<GameStackParamList, 'HomeScreen'>,
  NativeStackScreenProps<MainStackParamList>
>;

function HomeScreen({navigation}: HomeNavProp) {
  const {t, i18n} = useTranslation();

  return (
    <HomeView>
      <HeaderText>{t('welcome')}</HeaderText>
      <SubHeaderText>{t('sub_welcome')}</SubHeaderText>

      <PlayButton primary>{t('play')}</PlayButton>
      <AcceptButton>{t('accept')}</AcceptButton>
    </HomeView>
  );
}

export {HomeScreen};
