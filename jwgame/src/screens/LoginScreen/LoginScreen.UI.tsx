import {Text} from 'components/Text';
import {Button} from 'components/Button';
import {TextInput} from 'components/TextInput';
import styled from 'styled-components/native';
import {scale} from '@utils/scaleFunctions';
import {fontSizes} from '@utils/constants';

export const BgView = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: space-between;
    background-color: ${(props: {theme: {viewBg: unknown}}) => props.theme.viewBg};
    padding: 50px 0px;
`;

export const HeaderText = styled(Text)`
    font-size: ${scale(fontSizes.xxLarge)}px;
`;

export const TxtInputUser = styled(TextInput)``;

export const TxtInputPassw = styled(TextInput)``;

export const LoginButton = styled(Button)`
    top: 20px;
`;
