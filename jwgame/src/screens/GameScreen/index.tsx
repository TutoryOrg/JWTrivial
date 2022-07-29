import React, {useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {RefTimer} from '@components/Timer';
import {Screens} from '@navigation/constants';
import {MainStackParamList} from 'navigation/MainNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, OptionButton, TextInput, Timer} from 'components';
import {QuestionEntry} from '../../../types';
import {
    GameContainer,
    GoBackButton,
    HeaderContainer,
    HeaderText,
    QuestionText,
    SafeViewBg,
} from './GameScreen.UI';
import questionsData from 'utils/gamequestions.json';
import _ from 'lodash';

type GameScreenProps = NativeStackScreenProps<MainStackParamList, Screens.GameScreen>;
type selectedOptionType = 'A' | 'B' | 'C';

function GameScreen({navigation, route}: GameScreenProps): JSX.Element {
    const {t} = useTranslation();
    const title = route?.params?.title ?? '';
    const color = route?.params?.color ?? '';

    const timerRef = useRef<RefTimer>(null);

    const [numQuestion, setNumQuestion] = useState<number>(0);
    const [selectedOption, setSelectedOption] = useState<selectedOptionType>();

    const questions: Array<QuestionEntry> = questionsData.filter(
        question => question.typeQuestion === (route?.params?.title as string)
    ) as Array<QuestionEntry>;

    const onGoBack = () => navigation.goBack();

    const onCheck = () => {
        if (selectedOption === questions[numQuestion].correctAnswer) {
            if (numQuestion < questions.length - 1) {
                setNumQuestion(prev => prev + 1);
            }
        }

        timerRef.current?.onReset();
    };

    const onTimeUp = () => {
        setTimeout(() => timerRef.current?.onReset(), 3000);
    };

    return (
        <SafeViewBg>
            <HeaderContainer>
                <GoBackButton onPress={onGoBack} />
                <HeaderText text={t(title)} />
            </HeaderContainer>

            <GameContainer>
                <QuestionText text={!_.isEmpty(questions) && questions[numQuestion].question} />

                <Timer ref={timerRef} minutes={1} seconds={4} onTimeUp={onTimeUp} />

                {!_.isEmpty(questions) &&
                    Object.keys(questions[numQuestion].options).map((option, index) => {
                        return (
                            <OptionButton
                                key={index}
                                optionText={option}
                                description={questions[numQuestion].options[option]}
                                isSelected={selectedOption === option}
                                subDescription={''}
                                onPress={() => setSelectedOption(option as selectedOptionType)}
                            />
                        );
                    })}

                <Button primary text={'ok'} onPressBn={onCheck} />

                <TextInput
                    isSecret={true}
                    isEditable={false}
                    label={t('clue')}
                    placeHolder={''}
                    defaultValue={!_.isEmpty(questions) ? questions[numQuestion].clue : ''}
                />
            </GameContainer>
        </SafeViewBg>
    );
}

export {GameScreen};
