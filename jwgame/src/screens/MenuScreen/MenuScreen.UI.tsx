import {Screens} from 'navigation/constants';
import {scale, windowWidth} from 'utils/scaleFunctions';
import {Text, MenuButton, ArrowButton} from 'components';
import {colors, fontFamilies, fontSizes, gridSizes} from 'utils/constants';
import styled from 'styled-components/native';

export const SafeViewBg = styled.SafeAreaView`
    flex: 1;
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
    width: ${windowWidth - scale(gridSizes.grid6x) * 2}px;
`;

export const MenuContainer = styled.View`
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    top: ${scale(gridSizes.grid9x)}px;
`;

export const MenuOptionButton = styled(MenuButton)`
    margin: ${scale(gridSizes.grid6x)}px ${scale(gridSizes.grid4x)}px ${scale(gridSizes.grid3x)}px
        ${scale(gridSizes.grid4x)}px;
`;

export const MenuOptions = [
    {
        text: 'whowas',
        color: colors.menuYellow,
        goToScreen: Screens.GameScreen,
        bgColor: colors.fadeYellow,
    },
    {
        text: 'history',
        color: colors.menuOrange,
        goToScreen: Screens.GameScreen,
        bgColor: colors.fadeRed,
    },
    {
        text: 'prophecies',
        color: colors.menuPale,
        goToScreen: Screens.GameScreen,
        bgColor: colors.fadeOrange,
    },
    {
        text: 'whosaid',
        color: colors.menuBlue,
        goToScreen: Screens.GameScreen,
        bgColor: colors.fadeBlue,
    },
    {
        text: 'settings',
        color: colors.yellow,
        goToScreen: Screens.SettingsScreen,
    },
    {
        text: 'profile',
        color: colors.green,
        goToScreen: Screens.ProfileScreen,
    },
];
