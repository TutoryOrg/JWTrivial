import React from 'react';
import {Text} from 'components/Text';
import {scale} from 'utils/scaleFunctions';
import {colors, fontFamilies, gridSizes} from 'utils/constants';
import styled from 'styled-components/native';

const Container = styled.View`
    height: ${scale(gridSizes.grid10x)}px;
    width: ${scale(gridSizes.grid10x)}px;
    border-radius: ${scale(gridSizes.grid8x)}px;
    align-items: center;
    justify-content: center;
    background-color: ${colors.yellow};
    elevation: 5;
`;

const CounterText = styled(Text)`
    color: ${colors.white};
    font-size: ${scale(gridSizes.grid6x)}px;
    font-family: ${fontFamilies.NunitoBold};
`;

interface PointsCounterProps {
    counter: number;
}

export const PointsCounter = (props: PointsCounterProps): JSX.Element => {
    const {counter, ...rest} = props;

    return (
        <Container {...rest}>
            <CounterText text={counter.toString()} />
        </Container>
    );
};
