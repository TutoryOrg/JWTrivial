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
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'store/redux/rxstore';
import {resetPoints} from 'store/redux/points/poinstSlice';

type ProfileScreen = NativeStackScreenProps<MainStackParamList>;

export function ProfileScreen(): JSX.Element {
    const {t} = useTranslation();
    const dispatch = useDispatch();

    const [savedName, setSavedName] = useState<string>('');
    const [displayName, setDisplayName] = useState<string>('');

    const wrongPoints = useSelector((state: RootState) => state.points.wrong);
    const correctPoints = useSelector((state: RootState) => state.points.correct);

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

    const onPressReset = () => dispatch(resetPoints());

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
                    <LabelPointsWrong text={t('totalWrong')} points={wrongPoints} />
                    <LabelPointsCorrect text={t('totalCorrect')} points={correctPoints} />
                    <ResetButton primary={true} text={t('reset')} onPressBn={onPressReset} />
                </SectionStatsContainer>
            </ContentContainer>
        </SafeViewBg>
    );
}
