import {Text} from 'components/Text';
import {fontSizes, gridSizes} from '@utils/constants';
import {scale, verticalScale} from '@utils/scaleFunctions';
import styled from 'styled-components/native';
import {Button} from '@components/Button';

export const SafeViewBg = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: ${props => props.theme.viewBg};
`;

export const HeaderText = styled(Text)`
    font-size: ${scale(fontSizes.xxxLarge)}px;
    padding-top: ${verticalScale(gridSizes.grid14x)}px;
`;

export const SubHeaderText = styled(Text)`
    font-size: ${scale(fontSizes.normal)}px;
    padding-top: 20px;
`;

export const PlayButton = styled(Button)`
    position: absolute;
    bottom: ${verticalScale(gridSizes.grid15x)}px;
`;
