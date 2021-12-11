import React from 'react';
import styled from 'styled-components/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CompositeScreenProps} from '@react-navigation/native';
import {GameStackParamList} from '@navigation/GameNavigator';
import {MainStackParamList} from '@navigation/MainNavigator';
import {useTranslation} from 'react-i18next';

const HomeView = styled.View`
  flex: 1;
  background-color: ${props => props.theme.viewBg};
  align-items: center;
`;

const HeaderText = styled.Text`
  font-size: 28px;
  color: ${props => props.theme.textColor};
`;

const SubHeaderText = styled.Text`
  font-size: 18px;
  color: ${props => props.theme.textColor};
`;

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
    </HomeView>
  );
}

export {HomeScreen};
