import {Text} from 'components/Text';
import {Button} from 'components/Button';
import {TextInput} from 'components/TextInput';
import styled from 'styled-components/native';
import {scale, verticalScale} from '@utils/scaleFunctions';
import {fontFamilies, fontSizes, gridSizes} from '@utils/constants';

export const BgView = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: space-between;
    background-color: ${(props: {theme: {viewBg: unknown}}) => props.theme.viewBg};
    padding: ${verticalScale(gridSizes.grid10x)}px 0px;
`;

export const HeaderText = styled(Text)`
    font-size: ${scale(fontSizes.xxLarge)}px;
    bottom: ${verticalScale(gridSizes.gridx)}px;
    font-family: ${fontFamilies.NunitoBold};
`;

export const TxtInputUser = styled(TextInput)`
    padding-top: ${verticalScale(gridSizes.grid5x)}px;
`;

export const TxtInputPassw = styled(TextInput)`
    padding-top: ${verticalScale(gridSizes.grid5x)}px;
`;

export const LoginButton = styled(Button)`
    top: ${verticalScale(gridSizes.grid5x)}px;
`;
