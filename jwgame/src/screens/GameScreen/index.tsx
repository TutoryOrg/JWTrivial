import React from 'react';
import {useTranslation} from 'react-i18next';
import {MainStackParamList} from 'navigation/MainNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {GoBackButton, HeaderContainer, HeaderText, SafeViewBg} from './GameScreen.UI';

type HomeNavProp = NativeStackScreenProps<MainStackParamList>;

function GameScreen({navigation}: HomeNavProp): JSX.Element {
    const {t} = useTranslation();

    const onGoBack = () => navigation.goBack();

    return (
        <SafeViewBg>
            <HeaderContainer>
                <GoBackButton onPress={onGoBack} />
                <HeaderText text={t('menu')} />
            </HeaderContainer>
        </SafeViewBg>
    );
}

export {GameScreen};
