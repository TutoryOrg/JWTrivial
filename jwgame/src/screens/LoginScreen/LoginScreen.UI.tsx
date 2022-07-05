import {Text} from 'components/Text';
import {Button} from 'components/Button';
import {TextInput} from 'components/TextInput';
import styled from 'styled-components/native';

export const BgView = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: space-around;
    background-color: ${(props: {theme: {viewBg: unknown}}) => props.theme.viewBg};
    padding: 50px 0px;
`;

export const HeaderText = styled(Text)`
    bottom: 40px;
`;

export const TxtInputUser = styled(TextInput)`
    bottom: 20px;
`;

export const TxtInputPassw = styled(TextInput)`
    bottom: 10px;
`;

export const LoginButton = styled(Button)`
    top: 40px;
`;
