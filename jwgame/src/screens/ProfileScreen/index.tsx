import React from 'react';
import {TextInput} from 'components';
import {useTranslation} from 'react-i18next';
import {MainStackParamList} from '@navigation/MainNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
    ContentContainer,
    HeaderContainer,
    HeaderText,
    LabelPointsCorrect,
    LabelPointsWrong,
    ProfileImage,
    ResetButton,
    SafeViewBg,
    SectionNameContainer,
    SectionStatsContainer,
    SubHeadingNameText,
    SubHeadingStatsText,
} from './ProfileScreen.UI';

type ProfileScreen = NativeStackScreenProps<MainStackParamList>;

export function ProfileScreen(): JSX.Element {
    const {t} = useTranslation();

    return (
        <SafeViewBg>
            <HeaderContainer>
                <HeaderText text={t('profile')} />
            </HeaderContainer>

            <ContentContainer>
                <ProfileImage source={require('assets/icons/userIcon_250.png')} />
                <SectionNameContainer>
                    <SubHeadingNameText text={t('name')} />
                    <TextInput
                        label={''}
                        placeHolder={''}
                        isSecret={false}
                        isEditable={true}
                        defaultValue={'salcocer'}
                    />
                </SectionNameContainer>
                <SectionStatsContainer enabled={false}>
                    <SubHeadingStatsText text={t('stats')} />
                    <LabelPointsCorrect text={t('totalCorrect')} points={9} />
                    <LabelPointsWrong text={t('totalWrong')} points={9} />
                    <ResetButton
                        primary={true}
                        text={t('reset')}
                        onPressBn={() => console.log('reset')}
                    />
                </SectionStatsContainer>
            </ContentContainer>
        </SafeViewBg>
    );
}
