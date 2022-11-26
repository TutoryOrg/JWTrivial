import {scale, windowHeight, windowWidth} from 'utils/scaleFunctions';
import {LabelPointsInfo, Text, ArrowButton, Button} from 'components';
import {colors, fontFamilies, fontSizes, gridSizes} from 'utils/constants';
import styled from 'styled-components/native';

export const SafeViewBg = styled.SafeAreaView`
    flex: 1;
    height: 100%;
    align-items: center;
    background-color: ${props => props.theme.lightViewBg};
`;

export const HeaderContainer = styled.View`
    width: 100%;
    align-items: center;
    flex-direction: row;
    top: ${scale(gridSizes.grid3x)}px;
`;

export const GoBackButton = styled(ArrowButton)`
    left: ${scale(gridSizes.grid3x)}px;
`;

export const HeaderText = styled(Text)`
    color: ${colors.primaryGrey};
    font-family: ${fontFamilies.NunitoBold};
    font-size: ${scale(fontSizes.xxxLarge)}px;
    width: ${windowWidth}px;
`;

export const ContentContainer = styled.View`
    height: ${windowHeight / 1.2}px;
    width: 100%;
    align-items: center;
    margin-top: ${scale(gridSizes.grid6x)}px;
`;

export const SectionNameContainer = styled.View`
    width: 100%;
    height: 30%;
    align-items: center;
    padding-top: ${scale(gridSizes.grid6x)}px;
`;

export const SectionStatsContainer = styled.View`
    width: 100%;
    height: 40%;
    align-items: center;
    justify-content: space-around;
`;

export const SubHeadingNameText = styled(Text)`
    width: 70%;
    text-align: left;
    color: ${colors.primaryGrey};
    font-size: ${scale(fontSizes.large)}px;
    font-family: ${fontFamilies.NunitoBold};
    margin-bottom: -20px;
`;

export const SubHeadingStatsText = styled(Text)`
    width: 70%;
    text-align: left;
    color: ${colors.primaryGrey};
    font-size: ${scale(fontSizes.large)}px;
    font-family: ${fontFamilies.NunitoBold};
`;

export const ProfileImage = styled.Image`
    width: ${scale(gridSizes.grid18x)}px;
    height: ${scale(gridSizes.grid18x)}px;
    border-color: ${colors.primaryGrey};
    border-width: ${scale(gridSizes.gridx)}px;
    border-radius: ${scale(gridSizes.grid20x)}px;
`;

export const LabelPointsCorrect = styled(LabelPointsInfo)`
    background-color: ${colors.fadedGreen};
`;

export const LabelPointsWrong = styled(LabelPointsInfo)`
    background-color: ${colors.lightRed};
    margin-bottom: ${scale(gridSizes.grid4x)}px;
`;

export const ResetButton = styled(Button)`
    width: 30%;
    height: ${scale(gridSizes.grid6x)}px;
    border-radius: ${scale(gridSizes.grid2x)}px;
`;
