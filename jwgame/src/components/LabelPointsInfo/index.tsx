import React from 'react';
import {Text} from 'components/Text';
import {scale} from 'utils/scaleFunctions';
import {gridSizes, colors, fontFamilies} from 'utils/constants';
import styled from 'styled-components/native';

const Container = styled.View`
    width: 70%;
    padding-left: 20px;
    padding-right: 20px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: ${scale(gridSizes.grid7x)}px;
    background-color: ${colors.paleBlue};
    border-radius: ${scale(gridSizes.grid1x)}px;
`;

const LabelText = styled(Text)`
    color: ${colors.primaryBlack};
    font-family: ${fontFamilies.NunitoBold};
`;

const LabelPoints = styled(Text)`
    color: ${colors.indigo};
    font-size: ${scale(gridSizes.grid5x)}px;
    font-family: ${fontFamilies.NunitoBold};
`;

interface LabelPointsInfoProps {
    text: string;
    points: number;
}

export const LabelPointsInfo = (props: LabelPointsInfoProps): JSX.Element => {
    const {text, points, ...rest} = props;

    return (
        <Container {...rest}>
            <LabelText text={text} />
            <LabelPoints text={points.toString()} />
        </Container>
    );
};
