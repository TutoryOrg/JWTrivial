import React from 'react';
import {useTranslation} from 'react-i18next';
import {MainStackParamList} from '@navigation/MainNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  HomeView,
  HeaderText,
  SubHeaderText,
  PlayButton,
  AcceptButton,
} from './HomeScreen.UI';

type HomeNavProp = NativeStackScreenProps<MainStackParamList>;

function HomeScreen({navigation}: HomeNavProp) {
  const {t} = useTranslation();

  return (
    <HomeView>
      <HeaderText>{t('welcome')}</HeaderText>
      <SubHeaderText>{t('sub_welcome')}</SubHeaderText>

      <PlayButton primary onPressBn={() => navigation.navigate('MenuScreen')}>
        {t('play')}
      </PlayButton>

      <AcceptButton onPressBn={() => navigation.navigate('LoginScreen')}>
        {t('login_admin')}
      </AcceptButton>
    </HomeView>
  );
}

export {HomeScreen};
