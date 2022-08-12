import React from 'react';
import {useTranslation} from 'react-i18next';
import {MainStackParamList} from '@navigation/MainNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
    GoBackButton,
    HeaderText,
    SafeViewBg,
    HeaderContainer,
    ContentContainer,
} from './SettingsScreen.UI';
import {DropOptions} from 'components';

type SettingsScreenProps = NativeStackScreenProps<MainStackParamList>;

export function SettingsScreen({navigation}: SettingsScreenProps): JSX.Element {
    const {t} = useTranslation();

    const onGoBack = () => navigation.goBack();

    return (
        <SafeViewBg>
            <HeaderContainer>
                <GoBackButton onPress={onGoBack} />
                <HeaderText text={t('settings')} />
            </HeaderContainer>
            <ContentContainer>
                <DropOptions
                    title={'Theme'}
                    subTitle={'Light'}
                    iconSource={require('assets/icons/dark_light.png')}
                    options={[{text: 'Dark'}, {text: 'Light'}]}
                />
                <DropOptions
                    title={'Language'}
                    subTitle={'English'}
                    iconSource={require('assets/icons/language.png')}
                    options={[
                        {text: 'English', icon: require('assets/icons/britain.png')},
                        {text: 'Español', icon: require('assets/icons/spain.png')},
                    ]}
                />
            </ContentContainer>
        </SafeViewBg>
    );
}
