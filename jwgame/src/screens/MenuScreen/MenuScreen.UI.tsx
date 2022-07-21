import {Text} from 'components/Text';
import {colors, fontFamilies, fontSizes, gridSizes} from '@utils/constants';
import {scale} from '@utils/scaleFunctions';
import styled from 'styled-components/native';
import {ArrowButton} from '@components/ArrowButton';
import {MenuButton} from '@components/MenuButton';

export const SafeViewBg = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: ${props => props.theme.lightViewBg};
`;

export const GoBackButton = styled(ArrowButton)`
    position: absolute;
    top: ${scale(gridSizes.grid4x)}px;
    left: ${scale(gridSizes.grid4x)}px;
`;

export const HeaderText = styled(Text)`
    font-size: ${scale(fontSizes.xxxLarge)}px;
    font-family: ${fontFamilies.NunitoBold};
    color: ${colors.primaryGray};
    top: ${scale(gridSizes.grid2x)}px;
`;

export const MenuContainer = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    top: ${scale(gridSizes.grid9x)}px;
`;

export const MenuOptionButton = styled(MenuButton)`
    margin: ${scale(gridSizes.grid6x)}px ${scale(gridSizes.grid4x)}px ${scale(gridSizes.grid3x)}px
        ${scale(gridSizes.grid4x)}px;
`;
