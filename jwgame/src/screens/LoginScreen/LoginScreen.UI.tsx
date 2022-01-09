import {Dimensions} from 'react-native';
import {Button} from '../../components/Button';
import {TextInput} from '../../components/TextInput';

import styled from 'styled-components/native';

const windowHeight = Dimensions.get('window').height;

export const BgView = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: ${props => props.theme.viewBg};
`;

export const TxtInputUser = styled(TextInput)`
  top: ${windowHeight / 5}px;
`;

export const TxtInputPassw = styled(TextInput)`
  top: ${windowHeight / 3}px;
`;

export const LoginButton = styled(Button)`
  top: ${windowHeight / 1.5}px;
  width: 85%;
  height: 55px;
  border-radius: 2px;
`;
