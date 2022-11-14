import React, {createRef, RefObject, useRef, useState} from 'react';
import {useQuestions} from 'hooks/useQuestions';
import {QuestionEntry} from '@types';
import {RefTimer} from 'components/Timer';
import {useTranslation} from 'react-i18next';
import {Screens} from '@navigation/constants';
import {RefOptionButton} from 'components/OptionButton';
import {MainStackParamList} from 'navigation/MainNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
    PointsCounter,
    Button,
    OptionButton,
    ModalCountPoints,
    TextInput,
    Timer,
    ArrowButton,
    Text,
} from 'components';
import {
    GameContainer,
    HeaderContainer,
    HeaderText,
    QuestionText,
    SafeViewBg,
} from './GameScreen.UI';
import _ from 'lodash';

type GameScreenProps = NativeStackScreenProps<MainStackParamList, Screens.GameScreen>;
type selectedOptionType = 'A' | 'B' | 'C' | undefined;

export function GameScreen({navigation, route}: GameScreenProps): JSX.Element {
    const {t} = useTranslation();
    const [questionsData, loadingQuestions] = useQuestions({
        typeQuestion: route?.params?.title as string,
    });
    const timerRef = useRef<RefTimer>(null);
    const optionRef: RefObject<RefOptionButton>[] = [];

    const title = route?.params?.title ?? '';
    const color = route?.params?.color ?? '';

    const [numQuestion, setNumQuestion] = useState<number>(0);
    const [correctAnswers, setCorrectAnswers] = useState<number>(0);
    const [showModalCount, setShowModalCount] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<selectedOptionType>();

    const questions: Array<QuestionEntry> = questionsData as Array<QuestionEntry>;

    const onGoBack = () => navigation.goBack();

    const onToggleModalCountPoints = () => setShowModalCount(!showModalCount);

    const onTimeUp = () => {
        onToggleModalCountPoints();
    };

    const onRetry = () => {
        setNumQuestion(0);
        setCorrectAnswers(0);
        setSelectedOption(undefined);
        timerRef.current?.onReset();
        onToggleModalCountPoints();
    };

    const onCheck = () => {
        setTimeout(() => {
            if (_.isEmpty(selectedOption)) return;

            if (selectedOption !== questions[numQuestion].correctAnswer) {
                onToggleModalCountPoints();
            }

            if (selectedOption === questions[numQuestion].correctAnswer) {
                setCorrectAnswers(prev => prev + 1);
                if (numQuestion < questions.length - 1) setNumQuestion(prev => prev + 1);
                else onToggleModalCountPoints();
            }

            setSelectedOption(undefined);
        }, 500);

        optionRef.forEach(option => {
            if (option.current?.optionText === selectedOption)
                option.current?.onCheckCorrectOption();
        });
    };

    return (
        <SafeViewBg color={color}>
            {showModalCount && (
                <ModalCountPoints
                    title={t('ohh')}
                    pointsGained={correctAnswers}
                    pointsAcumulated={5}
                    leftButtonText={t('menu')}
                    rightButtonText={t('retry')}
                    onPressLeftButton={onGoBack}
                    onPressRightButton={onRetry}
                />
            )}

            <HeaderContainer>
                <ArrowButton onPress={onGoBack} />
                <HeaderText text={t(title)} />
                <PointsCounter counter={correctAnswers} />
            </HeaderContainer>

            <GameContainer>
                {loadingQuestions ? (
                    <Text color="black" text={'Loading ...'} />
                ) : (
                    <>
                        <QuestionText
                            text={!_.isEmpty(questions) && questions[numQuestion].question}
                        />

                        <Timer ref={timerRef} minutes={1} seconds={4} onTimeUp={onTimeUp} />

                        {!_.isEmpty(questions) &&
                            Object.keys(questions[numQuestion].options).map((option, index) => {
                                optionRef.push(createRef<RefOptionButton>());
                                return (
                                    <OptionButton
                                        key={index}
                                        ref={optionRef[index]}
                                        optionText={option}
                                        description={questions[numQuestion].options[option]}
                                        subDescription={''}
                                        isSelected={selectedOption === option}
                                        isCorrectOption={
                                            option === questions[numQuestion].correctAnswer
                                        }
                                        onPress={() =>
                                            setSelectedOption(option as selectedOptionType)
                                        }
                                    />
                                );
                            })}

                        <Button primary text={t('check')} onPressBn={onCheck} />

                        <TextInput
                            isSecret={true}
                            isEditable={false}
                            label={t('clue')}
                            placeHolder={''}
                            defaultValue={!_.isEmpty(questions) ? questions[numQuestion].clue : ''}
                        />
                    </>
                )}
            </GameContainer>
        </SafeViewBg>
    );
}
