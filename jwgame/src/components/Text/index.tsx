import React from 'react';
import {colors, fontFamilies, fontSizes} from '../../constants';
import styled from 'styled-components/native';

type TextAlign = 'center' | 'left';
type TextJustify = 'center' | 'right';
type FontFamily = keyof typeof fontFamilies;

const BaseText = styled.Text<{
  color?: string;
  fontSize?: number;
  fontFamily?: FontFamily;
  textAlign?: TextAlign;
  textJustify?: TextJustify;
  lineHeight?: number;
}>`
  font-family: ${props =>
    props.fontFamily ? fontFamilies[props.fontFamily] : fontFamilies.Nunito};
  font-size: ${props => props.fontSize ?? fontSizes.normal}px;
  color: ${props => (props.color ? props.color : props.theme.textColor)};
  ${props =>
    props.textAlign ? `text-align: ${props.textAlign}` : 'text-align: center'};
  ${props => (props.textJustify ? `text-justify: ${props.textJustify}` : '')};
  ${props => (props.lineHeight ? `line-height: ${props.lineHeight}px` : '')};
`;

interface TextProps {
  children: React.ReactNode;
  color?: string;
  fontSize?: number;
  fontFamily?: FontFamily;
  textAlign?: TextAlign;
  lineHeight?: number;
}

export const Text = (props: TextProps) => {
  return <BaseText {...props} />;
};