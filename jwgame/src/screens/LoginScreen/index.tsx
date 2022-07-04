import React from 'react';
import {useTranslation} from 'react-i18next';
import {HeaderText} from './LoginScreen.UI';
import {BgView, TxtInputUser, TxtInputPassw, LoginButton} from './LoginScreen.UI';

function LoginScreen(): JSX.Element {
    const {t} = useTranslation();

    return (
        <BgView>
            <HeaderText>{t('login_admin')}</HeaderText>
            <TxtInputUser label={t('user_name')} placeHolder={t('user_name')} />
            <TxtInputPassw isPassw label={t('password')} placeHolder={t('password')} />
            <LoginButton>{t('login')}</LoginButton>
        </BgView>
    );
}

export {LoginScreen};
