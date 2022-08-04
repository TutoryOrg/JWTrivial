import React from 'react';
import {Button, Text} from 'components';
import {colors, fontFamilies, fontSizes, gridSizes} from '@utils/constants';
import {scale} from '@utils/scaleFunctions';
import styled from 'styled-components/native';

const Container = styled.View`
    position: absolute;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: ${colors.lightGrey + 'B0'};
    z-index: 2;
`;

const ModalContainer = styled.View`
    width: 60%;
    height: 35%;
    border: ${scale(gridSizes.gridx)}px;
    border-radius: ${scale(gridSizes.grid4x)}px;
    border-color: ${colors.lightGrey};
    align-items: center;
    justify-content: space-around;
    background-color: ${colors.white};
    bottom: ${scale(gridSizes.grid17x)}px;
`;

const ModalTitle = styled(Text)`
    color: ${colors.indigo};
    font-family: ${fontFamilies.NunitoBold};
    font-size: ${scale(fontSizes.xLarge)}px;
`;

const InfoContainer = styled.View`
    flex-direction: row;
    alig-items: center;
    justify-content: center;
    width: 100%;
`;

const PointsInfoText = styled(Text)`
    color: ${colors.primaryGrey};
    font-family: ${fontFamilies.Nunito};
    font-size: ${scale(fontSizes.normal)}px;
    padding-left: ${scale(gridSizes.grid2x)}px;
    padding-right: ${scale(gridSizes.grid2x)}px;
`;

const PointsNumberText = styled(Text)`
    color: ${colors.yellow};
    font-family: ${fontFamilies.NunitoBold};
    font-size: ${scale(fontSizes.normal)}px;
    padding-left: ${scale(gridSizes.grid2x)}px;
    padding-right: ${scale(gridSizes.grid2x)}px;
`;

const ButtonContainer = styled.View`
    width: 100%;
    height: ${scale(gridSizes.grid5x)}px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-bottom: ${scale(gridSizes.grid3x)}px;
    margin-top: ${scale(gridSizes.grid3x)}px;
`;

const ModalButton = styled(Button)`
    width: 45%;
    height: 100%;
    border-radius: ${scale(gridSizes.grid1x)}px;
    margin-left: ${scale(gridSizes.gridx)}px;
    margin-right: ${scale(gridSizes.gridx)}px;
`;

interface ModalCountPointsProps {
    title: string;
    pointsGained: number;
    pointsAcumulated: number;
    leftButtonText: string;
    rightButtonText: string;
    onPressLeftButton: () => void;
    onPressRightButton: () => void;
}

export const ModalCountPoints = (props: ModalCountPointsProps): JSX.Element => {
    const {
        title,
        pointsGained,
        pointsAcumulated,
        leftButtonText,
        rightButtonText,
        onPressLeftButton,
        onPressRightButton,
        ...rest
    } = props;

    return (
        <Container {...rest}>
            <ModalContainer>
                <ModalTitle text={title} />
                <InfoContainer>
                    <PointsInfoText text={'pointsgained' + ':'} />
                    <PointsNumberText text={pointsGained} />
                </InfoContainer>

                <InfoContainer>
                    <PointsInfoText text={'pointsaccum' + ':'} />
                    <PointsNumberText text={pointsAcumulated} />
                </InfoContainer>

                <ButtonContainer>
                    <ModalButton text={leftButtonText} onPressBn={onPressLeftButton} />
                    <ModalButton primary text={rightButtonText} onPressBn={onPressRightButton} />
                </ButtonContainer>
            </ModalContainer>
        </Container>
    );
};
