import {Text, ArrowButton} from 'components';
import {scale, windowWidth} from 'utils/scaleFunctions';
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
    width: 100%;
    height: 100%;
    margin-top: ${scale(gridSizes.grid6x)}px;
    align-items: center;
    justify-content: flex-start;
`;
