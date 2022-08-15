import React from 'react';
import {Text} from 'components/Text';
import {scale} from 'utils/scaleFunctions';
import {Button} from 'components/Button';
import {Animated} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useFadeAnimation} from 'hooks/useFadeAnimation';
import {colors, fontFamilies, fontSizes, gridSizes} from 'utils/constants';
import styled from 'styled-components/native';

const Container = styled(Animated.View)`
    position: absolute;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: ${colors.lightGrey + 'B0'};
    z-index: 2;
`;

const ModalContainer = styled.View`
    width: 65%;
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
    width: 90%;
    flex-direction: row;
    alig-items: center;
    justify-content: flex-start;
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
    padding-left: ${scale(gridSizes.gridx)}px;
    padding-right: ${scale(gridSizes.gridx)}px;
`;

const ButtonContainer = styled.View`
    width: 100%;
    height: ${scale(gridSizes.grid6x)}px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
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
    const {t} = useTranslation();

    const {fadeAnim} = useFadeAnimation({fromValue: 0, toValue: 1, duration: 500});

    return (
        <Container {...rest} style={{opacity: fadeAnim}}>
            <ModalContainer>
                <ModalTitle text={title} />
                <InfoContainer>
                    <PointsInfoText text={t('pointsgained') + ':'} />
                    <PointsNumberText text={pointsGained} />
                </InfoContainer>

                <InfoContainer>
                    <PointsInfoText text={t('pointsaccum') + ':'} />
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
