import React from 'react';
import {useTranslation} from 'react-i18next';
import {MainStackParamList} from '@navigation/MainNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  HomeView,
  ProfileButton,
  HeaderText,
  SubHeaderText,
  PlayButton,
  AcceptButton,
} from './HomeScreen.UI';

type HomeNavProp = NativeStackScreenProps<MainStackParamList>;

function HomeScreen({navigation}: HomeNavProp) {
  const {t} = useTranslation();
  console.log('navigation : ', navigation);
  return (
    <HomeView>
      <ProfileButton onPress={() => navigation.navigate('ProfileScreen')} />
      <HeaderText>{t('welcome')}</HeaderText>
      <SubHeaderText>{t('sub_welcome')}</SubHeaderText>
      <PlayButton primary>{t('play')}</PlayButton>
      <AcceptButton>{t('accept')}</AcceptButton>
    </HomeView>
  );
}

export {HomeScreen};
