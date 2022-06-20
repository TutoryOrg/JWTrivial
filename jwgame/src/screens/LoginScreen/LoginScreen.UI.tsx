import {Dimensions} from 'react-native';
import {fontSizes} from '@constants';
import {Text} from '@components/Text';
import {Button} from '@components/Button';
import {TextInput} from '@components/TextInput';

import styled from 'styled-components/native';

const windowHeight = Dimensions.get('window').height;

export const BgView = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: ${(props: {theme: {viewBg: unknown}}) => props.theme.viewBg};
`;

export const HeaderText = styled(Text)`
    font-size: ${windowHeight < 700 ? fontSizes.xxxLarge : 50}px;
    top: 40px;
`;

export const TxtInputUser = styled(TextInput)`
    top: ${windowHeight / 7}px;
`;

export const TxtInputPassw = styled(TextInput)`
    top: ${windowHeight / 3.8}px;
`;

export const LoginButton = styled(Button)`
    margin-bottom: 10px;
    bottom: 10px;
    position: absolute;
    width: 85%;
    height: 55px;
    border-radius: 5px;
`;
