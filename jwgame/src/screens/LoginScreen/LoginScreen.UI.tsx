import {scale, verticalScale} from 'utils/scaleFunctions';
import {Text, Button, TextInput} from 'components';
import {fontFamilies, fontSizes, gridSizes} from 'utils/constants';
import styled from 'styled-components/native';

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
