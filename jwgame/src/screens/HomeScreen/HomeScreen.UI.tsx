import {Text} from '../../components/Text';
import {Button} from '../../components/Button';
import {Dimensions} from 'react-native';
import {fontSizes, gridSizes} from '../../constants';

import styled from 'styled-components/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const HomeView = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: ${props => props.theme.viewBg};
`;

export const HeaderText = styled(Text)`
  font-size: ${fontSizes.xxxLarge}px;
  top: ${gridSizes.grid6x}px;
`;

export const SubHeaderText = styled(Text)`
  font-size: ${fontSizes.large}px;
  top: ${gridSizes.grid6x}px;
`;

export const PlayButton = styled(Button)`
  top: ${windowHeight - 300}px;
`;

export const AcceptButton = styled(Button)`
  top: ${windowHeight - 280}px;
`;
