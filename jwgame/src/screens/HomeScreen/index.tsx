import React from 'react';
import {Text} from '../../components/Text';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CompositeScreenProps} from '@react-navigation/native';
import {GameStackParamList} from '@navigation/GameNavigator';
import {MainStackParamList} from '@navigation/MainNavigator';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components/native';

const HomeView = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: ${props => props.theme.viewBg};
`;

const HeaderText = styled(Text)`
  font-size: 34px;
  font-family: "Nunito-Regular";
  color: ${props => props.theme.textColor};
`;

const SubHeaderText = styled.Text`
  font-size: 24px;
  font-family: "Nunito-Regular";
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
