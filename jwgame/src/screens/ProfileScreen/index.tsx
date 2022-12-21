import React, {useState, useEffect} from 'react';
import {TextInput} from 'components';
import {useTranslation} from 'react-i18next';
import {MainStackParamList} from 'navigation/MainNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {KEY_CONSTANTS, readData, storeData} from 'store/async';
import {
    ContentContainer,
    HeaderContainer,
    HeaderText,
    LabelPointsCorrect,
    LabelPointsWrong,
    ProfileImage,
    ResetButton,
    SaveButton,
    SafeViewBg,
    SectionNameContainer,
    SectionStatsContainer,
    SubHeadingNameText,
    SubHeadingStatsText,
} from './ProfileScreen.UI';
import _ from 'lodash';

type ProfileScreen = NativeStackScreenProps<MainStackParamList>;

export function ProfileScreen(): JSX.Element {
    const {t} = useTranslation();
    const [savedName, setSavedName] = useState<string>('');
    const [displayName, setDisplayName] = useState<string>('');

    const onGetNameFromStore = async () => {
        const name = await readData(KEY_CONSTANTS.USERNAME);
        setSavedName(name);
        setDisplayName(name);
    };

    const onSaveNameToStore = () => {
        storeData(KEY_CONSTANTS.USERNAME, displayName);
        setSavedName(displayName);
    };

    const onEndEditingName = (e: {nativeEvent: {text: React.SetStateAction<string>}}) => {
        setDisplayName(e.nativeEvent.text);
    };

    const onPressReset = () => {
        console.log('onPressRest');
    };

    useEffect(() => {
        onGetNameFromStore();
    }, []);

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
                        defaultValue={displayName}
                        onEndEditing={onEndEditingName}
                    />
                    <SaveButton
                        text={t('save')}
                        primary={!_.isEqual(displayName, savedName)}
                        disabled={_.isEqual(displayName, savedName)}
                        onPressBn={onSaveNameToStore}
                    />
                </SectionNameContainer>

                <SectionStatsContainer enabled={false}>
                    <SubHeadingStatsText text={t('stats')} />
                    <LabelPointsCorrect text={t('totalCorrect')} points={9} />
                    <LabelPointsWrong text={t('totalWrong')} points={9} />
                    <ResetButton primary={true} text={t('reset')} onPressBn={onPressReset} />
                </SectionStatsContainer>
            </ContentContainer>
        </SafeViewBg>
    );
}
