import React from 'react';
import {Text} from 'components/Text';
import {colors, fontFamilies} from '@utils/constants';
import styled from 'styled-components/native';

const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${colors.lightGrey + '90'};
`;

const ModalContainer = styled.View`
    bottom: 90px;
    width: 50%;
    height: 30%;
    border: 1px;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    background-color: ${colors.white};
`;

const ModalTitle = styled(Text)`
    font-family: ${fontFamilies.NunitoBold};
`;

interface ModalCountPointsProps {
    title: string;
    pointsGained: number;
    pointsAcumulated: number;
}

export const ModalCountPoints = (props: ModalCountPointsProps): JSX.Element => {
    const {title, ...rest} = props;

    return (
        <Container {...rest}>
            <ModalContainer>
                <ModalTitle text={title} />
            </ModalContainer>
        </Container>
    );
};
