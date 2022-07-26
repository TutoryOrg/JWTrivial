import React from 'react';
import {useTranslation} from 'react-i18next';
import {Screens} from '@navigation/constants';
import {MainStackParamList} from 'navigation/MainNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, OptionButton, TextInput, Timer} from 'components';
import {
    GameContainer,
    GoBackButton,
    HeaderContainer,
    HeaderText,
    QuestionText,
    SafeViewBg,
} from './GameScreen.UI';

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

            <GameContainer>
                <QuestionText
                    text={
                        'LoLorem Ipsum is simply dummy text of the printing and typesetting industryrem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum'
                    }
                />

                <Timer minutes={1} seconds={4} onTimeUp={() => console.log('Time up!')} />

                <OptionButton
                    optionText={'A'}
                    description={'Option button'}
                    isSelected={true}
                    subDescription={'subdescription'}
                    onPress={() => console.log('OptionPressed')}
                />

                <OptionButton
                    optionText={'B'}
                    description={'Option button'}
                    isSelected={false}
                    subDescription={'subdescription'}
                    onPress={() => console.log('OptionPressed')}
                />

                <OptionButton
                    optionText={'C'}
                    description={'Option button'}
                    isSelected={false}
                    subDescription={'subdescription'}
                    onPress={() => console.log('OptionPressed')}
                />

                <Button primary text={'Ok'} onPressBn={() => console.log('pressed ok')} />

                <TextInput
                    isSecret={true}
                    isEditable={false}
                    label={'Pista'}
                    placeHolder={'placeholder'}
                    defaultValue={'pista numero 1'}
                />
            </GameContainer>
        </SafeViewBg>
    );
}

export {GameScreen};
