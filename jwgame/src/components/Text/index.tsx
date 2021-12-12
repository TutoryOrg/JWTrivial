import React from 'react';
import {TextProps} from 'react-native';
import {colors, fontFamilies, fontSizes} from '../../constants/index.ts';
import styled from 'styled-components/native';

type FontFamily = typeof fontFamily;
type TextAlign = 'center' | 'left';

const BaseText = styled.Text`
  font-family: ${props =>
    props.fontFamily ? fontFamilies[props.fontFamily] : fontFamilies.Nunito};
  font-size: ${props => props.fontSize ?? fontSizes.normal}px;
  color: ${props => (props.color ? props.color : colors.black)};
  text-align: ${props => (props.textAlign ? props.textAlign : '')};
`;


