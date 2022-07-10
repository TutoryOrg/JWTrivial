import React from 'react';
import {useTranslation} from 'react-i18next';
import {MainStackParamList} from 'navigation/MainNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeView, HeaderText, SubHeaderText, PlayButton, AcceptButton} from './HomeScreen.UI';

type HomeNavProp = NativeStackScreenProps<MainStackParamList>;

function HomeScreen({navigation}: HomeNavProp): JSX.Element {
    const {t} = useTranslation();

    return (
        <HomeView>
            <HeaderText text={t('welcome')} />
            <SubHeaderText text={t('sub_welcome')} />

            <PlayButton
                primary
                text={t('play')}
                onPressBn={() => navigation.navigate('MenuScreen')}
            />

            <AcceptButton
                text={t('login_admin')}
                onPressBn={() => navigation.navigate('LoginScreen')}
            />
        </HomeView>
    );
}

export {HomeScreen};
