import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text} from '../../components/Text';
import {
  BgView,
  TxtInputUser,
  TxtInputPassw,
  LoginButton,
} from './LoginScreen.UI';

function LoginScreen() {
  const {t} = useTranslation();

  return (
    <BgView>
      <Text>{'Titl'}</Text>
      <TxtInputUser label={t('user_name')} placeHolder={t('user_name')} />
      <TxtInputPassw label={t('password')} passw placeHolder={t('password')} />
      <LoginButton>Login Button</LoginButton>
    </BgView>
  );
}

export {LoginScreen};
