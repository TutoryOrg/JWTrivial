/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {scale, verticalScale} from '@utils/scaleFunctions';
import {colors, fontFamilies, gridSizes} from '@utils/constants';
import {Text} from '@components/Text';
import styled from 'styled-components/native';

const Container = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 30%;
`;

const UnitContainer = styled.View`
    flex-direction: column;
    align-items: center;
`;

const UnitText = styled(Text)`
    font-family: ${fontFamilies.NunitoBold};
    color: ${colors.indigo};
    margin-bottom: 10px;
`;

const NumberText = styled(Text)`
    font-family: ${fontFamilies.NunitoBold};
    color: ${colors.black};
`;

const NumberTextFade = styled(Text)`
    font-family: ${fontFamilies.NunitoBold};
    color: ${colors.fadedGrey};
    opacity: 0.5;
`;

const SeparatorLine = styled.View`
    margin-top: ${scale(gridSizes.gridx)}px;
    margin-bottom: ${scale(gridSizes.gridx)}px;
    border-bottom-color: ${colors.lightGrey};
    border-bottom-width: ${verticalScale(0.5)}px;
    width: 180%;
`;

const twoDigitsFormat = (n: number): string => {
    return n < 0 ? '0' : n < 10 && n >= 0 ? '0' + n : n.toString();
};

const previousNumber = (n: number): number => {
    return n === 0 ? n : n >= 59 ? n : n + 1;
};

const nextNumber = (n: number): number => {
    return n === 0 ? n : n <= 0 ? n : n - 1;
};

const ContainerUnit = ({unit, value}) => {
    return (
        <UnitContainer>
            <UnitText text={unit} />
            <NumberTextFade text={twoDigitsFormat(previousNumber(value))} />
            <SeparatorLine />
            <NumberText text={twoDigitsFormat(value)} />
            <SeparatorLine />
            <NumberTextFade text={twoDigitsFormat(nextNumber(value))} />
        </UnitContainer>
    );
};

interface TimerProps {
    minutes: number;
    seconds: number;
    onTimeUp: () => void;
}

export const Timer = (props: TimerProps): JSX.Element => {
    const {minutes, seconds, onTimeUp} = props;

    const {t} = useTranslation();

    const [min, setMin] = useState(minutes ?? 0);
    const [sec, setSec] = useState(seconds ?? 0);

    useEffect(() => {
        if (sec === 0 && min === 0) {
            onTimeUp();
            return;
        }

        if (sec < 0) {
            setSec(59);
            setMin(min - 1);
            return;
        }

        const timerId = setInterval(() => setSec(sec - 1), 1000);
        return () => clearInterval(timerId);
    }, [sec]);

    return (
        <Container>
            <ContainerUnit unit={t('min')} value={min} />
            <ContainerUnit unit={t('sec')} value={sec} />
        </Container>
    );
};
