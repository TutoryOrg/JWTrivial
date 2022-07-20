import React from 'react';
import {Text} from '@components/Text';
import styled from 'styled-components/native';

const Container = styled.View`
    flex-direction: row;
`;

const MinuteContainer = styled.View``;

const SecondContainer = styled.View``;

interface TimerProps {
    minutes: number;
    seconds: number;
}

export const Timer = (props: TimerProps): JSX.Element => {
    const {minutes, seconds} = props;

    console.log(minutes);
    console.log(seconds);

    return (
        <Container>
            <MinuteContainer>
                <Text text={'Min'} />
                <Text text={'1'} />
            </MinuteContainer>
            <SecondContainer>
                <Text text={'Seg'} />
                <Text text={'59'} />
            </SecondContainer>
        </Container>
    );
};
