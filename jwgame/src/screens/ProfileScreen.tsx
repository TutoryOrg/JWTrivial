import React from 'react';
import {Text, View, Button} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CompositeScreenProps} from '@react-navigation/native';
import {GameStackParamList} from '@src/navigation/GameNavigator';
import {MainStackParamList} from '@src/navigation/MainNavigator';
import {useTranslation} from 'react-i18next';

import styled from 'styled-components/native';

type ProfileNavProp = CompositeScreenProps<
  NativeStackScreenProps<GameStackParamList>,
  NativeStackScreenProps<MainStackParamList, 'ProfileScreen'>
>;

function ProfileScreen({route, navigation}: ProfileNavProp) {
  const {t, i18n} = useTranslation();
  const ButtonContainer = styled.TouchableOpacity`
    width: 100px;
    height: 40px
    padding: 12px;
    border-radius: 10px;
    background-color: ${props => props.theme.button};
`;

  return (
    <View>
      <Text>Profile Text</Text>
      <Text>{t('Welcome to React')}</Text>
      <ButtonContainer />
      <Button
        title="go Home"
        onPress={() => navigation.navigate('HomeScreen')}
      />
    </View>
  );
}

export {ProfileScreen};
