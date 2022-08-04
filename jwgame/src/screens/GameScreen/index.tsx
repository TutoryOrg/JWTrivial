import React, {useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {RefTimer} from '@components/Timer';
import {QuestionEntry} from '../../../types';
import {Screens} from '@navigation/constants';
import {MainStackParamList} from 'navigation/MainNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PointsCounter, Button, OptionButton, ModalCountPoints, TextInput, Timer} from 'components';
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

export function GameScreen({navigation, route}: GameScreenProps): JSX.Element {
    const {t} = useTranslation();
    const timerRef = useRef<RefTimer>(null);

    const title = route?.params?.title ?? '';
    const color = route?.params?.color ?? '';

    const [numQuestion, setNumQuestion] = useState<number>(0);
    const [correctAnswers, setCorrectAnswers] = useState<number>(0);
    const [showModalCount, setShowModalCount] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<selectedOptionType>();

    const questions: Array<QuestionEntry> = questionsData.filter(
        question => question.typeQuestion === (route?.params?.title as string)
    ) as Array<QuestionEntry>;

    const onGoBack = () => navigation.goBack();

    const onToggleModalCountPoints = () => setShowModalCount(!showModalCount);

    const onTimeUp = () => {
        setTimeout(() => timerRef.current?.onReset(), 3000);
    };

    const onRetry = () => {
        setNumQuestion(0);
        setCorrectAnswers(0);
        timerRef.current?.onReset();
        onToggleModalCountPoints();
    };

    const onCheck = () => {
        if (_.isEmpty(selectedOption)) return;

        if (selectedOption !== questions[numQuestion].correctAnswer) {
            onToggleModalCountPoints();
        }

        if (selectedOption === questions[numQuestion].correctAnswer) {
            setCorrectAnswers(prev => prev + 1);
            if (numQuestion < questions.length - 1) setNumQuestion(prev => prev + 1);
            else onToggleModalCountPoints();
        }
    };

    return (
        <SafeViewBg color={color}>
            {showModalCount && (
                <ModalCountPoints
                    title={'Ohh ..'}
                    pointsGained={correctAnswers}
                    pointsAcumulated={5}
                    leftButtonText={'Menu'}
                    rightButtonText={'Reintentar'}
                    onPressLeftButton={onGoBack}
                    onPressRightButton={onRetry}
                />
            )}

            <HeaderContainer>
                <GoBackButton onPress={onGoBack} />
                <HeaderText text={t(title)} />
                <PointsCounter counter={correctAnswers} />
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
