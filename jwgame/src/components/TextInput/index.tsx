import React from 'react';
import {fontFamilies, fontSizes} from '../../constants';
import styled from 'styled-components/native';

const Container = styled.View`
  position: absolute;
  height: 55px;
  width: 85%;
`;

const TxtLabel = styled.Text`
  font-family: ${fontFamilies.Nunito};
  font-size: ${fontSizes.large}px;
`;

const TxtInput = styled.TextInput`
  background-color: ${props => props.theme.textInputBnColor};
  border-radius: 10px;
  font-size: 20px;
  font-family: ${fontFamilies.Nunito}px;
  text-align: center;
`;

interface TextInputProps {
  passw?: boolean;
  label?: string;
  value?: string;
  placeHolder?: string;
}

export const TextInput = (props: TextInputProps) => {
  const {passw, placeHolder, label, ...rest} = props;
  return (
    <Container {...rest}>
      <TxtLabel>{label}</TxtLabel>
      <TxtInput secureTextEntry={passw} placeholder={placeHolder}></TxtInput>
    </Container>
  );
};
