import {Text} from 'components/Text';
import {ArrowButton} from '@components/ArrowButton';
import {colors, fontFamilies, fontSizes, gridSizes} from '@utils/constants';
import {scale, windowWidth} from '@utils/scaleFunctions';
import styled from 'styled-components/native';

export const SafeViewBg = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: ${props => props.theme.lightViewBg};
    height: 100%;
`;

export const GameContainer = styled.View`
    height: 80%;
    width: 100%;
    margin-top: 20px;
    align-items: center;
    justify-content: space-around;
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
    width: ${windowWidth - scale(gridSizes.grid6x) * 2}px;
`;

export const QuestionText = styled(Text)`
    color: ${colors.darkGrey};
    font-size: ${scale(fontSizes.normal)}px;
    text-align: left;
`;
