import {scale} from '@utils/scaleFunctions';
import {Text, ArrowButton} from 'components';
import {colors, fontFamilies, fontSizes, gridSizes} from '@utils/constants';
import styled from 'styled-components/native';

export const SafeViewBg = styled.SafeAreaView<{
    color;
}>`
    flex: 1;
    align-items: center;
    background-color: ${props => props.color};
    height: 100%;
    transform: rotate(0deg);
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
    height: 8%;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    top: ${scale(gridSizes.grid3x)}px;
`;

export const HeaderText = styled(Text)`
    color: ${colors.primaryGrey};
    font-family: ${fontFamilies.NunitoBold};
    font-size: ${scale(fontSizes.xxxLarge)}px;
`;

export const QuestionText = styled(Text)`
    color: ${colors.darkGrey};
    font-size: ${scale(fontSizes.normal)}px;
    text-align: left;
    width: 75%;
`;
