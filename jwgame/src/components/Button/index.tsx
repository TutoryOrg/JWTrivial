import React from 'react';
import {Text} from '../Text';
import {Dimensions} from 'react-native';
import {colors, gridSizes} from '../../constants';
import styled from 'styled-components/native';

const windowWidth = Dimensions.get('window').width;

const Container = styled.TouchableOpacity<{
  height?: number;
  width?: number;
  primary?: boolean;
}>`
  background-color: ${props =>
    props.primary ? props.theme.primaryBnColor : props.theme.secondaryBnColor};
  height: ${props => props.height ?? gridSizes.grid6x}px;
  width: ${windowWidth < 500 ? '90%' : '500px'};
  border-radius: 90px;
  align-items: center;
  justify-content: center;
`;

const ContainerText = styled(Text)<{
  primary?: boolean;
}>`
  color: ${props => (props.primary ? colors.white : colors.black)};
`;

interface ButtonProps {
  children: React.ReactNode;
  text?: string;
  height?: number;
  width?: number;
  primary?: boolean;
  onPressBn?: () => void;
}

export const Button = (props: ButtonProps) => {
  const {onPressBn, ...rest} = props;
  return (
    <Container onPress={onPressBn} {...rest}>
      <ContainerText primary={props.primary}>{props.children}</ContainerText>
    </Container>
  );
};
