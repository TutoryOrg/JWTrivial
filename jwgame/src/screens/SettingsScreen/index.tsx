import React from 'react';
import {useTranslation} from 'react-i18next';
import {HeaderText, SafeViewBg, HeaderContainer, ContentContainer} from './SettingsScreen.UI';
import {DropOptions} from 'components';

export function SettingsScreen(): JSX.Element {
    const {t} = useTranslation();

    return (
        <SafeViewBg>
            <HeaderContainer>
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
