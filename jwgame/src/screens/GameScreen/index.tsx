import React from 'react';
import {useTranslation} from 'react-i18next';
import {Screens} from '@navigation/constants';
import {MainStackParamList} from 'navigation/MainNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {GoBackButton, HeaderContainer, HeaderText, SafeViewBg} from './GameScreen.UI';

type GameScreenProps = NativeStackScreenProps<MainStackParamList, Screens.GameScreen>;

function GameScreen({navigation, route}: GameScreenProps): JSX.Element {
    const {t} = useTranslation();

    const onGoBack = () => navigation.goBack();

    return (
        <SafeViewBg>
            <HeaderContainer>
                <GoBackButton onPress={onGoBack} />
                <HeaderText text={t(route?.params?.title as string)} />
            </HeaderContainer>
        </SafeViewBg>
    );
}

export {GameScreen};
