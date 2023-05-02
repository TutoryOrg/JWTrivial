import React, {useState} from 'react';
import {TextInput} from 'components';
import {useSelector} from 'react-redux';
import {setUserName} from 'store/redux/user';
import {resetPoints} from 'store/redux/points';
import {useTranslation} from 'react-i18next';
import {MainStackParamList} from 'navigation/MainNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootState, useAppDispatch} from 'store/redux';
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
    const dispatch = useAppDispatch();

    const user = useSelector((state: RootState) => state.user);
    const points = useSelector((state: RootState) => state.points);

    const [displayName, setDisplayName] = useState<string>(user.name);

    const onEndEditingName = (e: {nativeEvent: {text: React.SetStateAction<string>}}) => {
        setDisplayName(e.nativeEvent.text);
    };

    const onPressReset = () => {
        dispatch(resetPoints());
    };

    const onSaveName = () => {
        dispatch(setUserName(displayName));
    };

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
                        defaultValue={user.name}
                        onEndEditing={onEndEditingName}
                    />
                    <SaveButton
                        text={t('save')}
                        primary={!_.isEqual(displayName, user.name)}
                        disabled={_.isEqual(displayName, user.name)}
                        onPressBn={onSaveName}
                    />
                </SectionNameContainer>

                <SectionStatsContainer enabled={false}>
                    <SubHeadingStatsText text={t('stats')} />
                    <LabelPointsCorrect text={t('totalCorrect')} points={points.correct} />
                    <LabelPointsWrong text={t('totalWrong')} points={points.wrong} />
                    <ResetButton primary={true} text={t('reset')} onPressBn={onPressReset} />
                </SectionStatsContainer>
            </ContentContainer>
        </SafeViewBg>
    );
}
