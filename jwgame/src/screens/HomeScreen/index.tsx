import React from 'react';
import {Screens} from 'navigation/constants';
import {useTranslation} from 'react-i18next';
import {MainStackParamList} from 'navigation/MainNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SafeViewBg, HeaderText, SubHeaderText, PlayButton} from './HomeScreen.UI';

type HomeNavProp = NativeStackScreenProps<MainStackParamList>;

export function HomeScreen({navigation}: HomeNavProp): JSX.Element {
    const {t} = useTranslation();

    setTimeout(() => navigation.navigate(Screens.MenuScreen), 1000);

    return (
        <SafeViewBg>
            <HeaderText text={t('welcome')} />
            <SubHeaderText text={t('sub_welcome')} />

            <PlayButton
                primary
                text={t('play')}
                onPress={() => navigation.navigate(Screens.MenuScreen)}
            />
        </SafeViewBg>
    );
}
