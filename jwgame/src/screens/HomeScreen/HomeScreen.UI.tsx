import {Text} from '../../components/Text';
import {Button} from '../../components/Button';
import {fontSizes} from '../../constants';
import {Dimensions} from 'react-native';

import styled from 'styled-components/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const HomeView = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: ${props => props.theme.viewBg};
`;

export const HeaderText = styled(Text)`
  font-size: ${windowHeight < 700 ? fontSizes.xxxLarge : 50}px;
  padding-top: 100px;
`;

export const SubHeaderText = styled(Text)`
  font-size: ${windowHeight < 700 ? fontSizes.xLarge : 25}px;
  padding-top: 20px;
`;

export const PlayButton = styled(Button)`
  position: absolute;
  bottom: 130px;
`;

export const AcceptButton = styled(Button)`
  position: absolute;
  bottom: 50px;
`;
