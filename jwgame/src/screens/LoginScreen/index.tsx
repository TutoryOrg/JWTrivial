import React from 'react';
import {HeaderText} from './LoginScreen.UI';
import {useTranslation} from 'react-i18next';
import {BgView, TxtInputUser, TxtInputPassw, LoginButton} from './LoginScreen.UI';

export function LoginScreen(): JSX.Element {
    const {t} = useTranslation();

    return (
        <BgView>
            <HeaderText text={t('login_admin')} />
            <TxtInputUser label={t('name')} placeHolder={t('name')} />
            <TxtInputPassw isSecret label={t('password')} placeHolder={t('password')} />
            <LoginButton text={t('login')} />
        </BgView>
    );
}
