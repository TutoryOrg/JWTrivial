import React from 'react';
import {fontFamilies, fontSizes} from '@utils/constants';
import {scale} from '@utils/scaleFunctions';
import styled from 'styled-components/native';

type TextAlign = 'center' | 'left';
type TextJustify = 'center' | 'right';
type FontFamily = keyof typeof fontFamilies;

interface TextProps {
    text: string;
    color?: string;
    fontSize?: number;
    fontFamily?: FontFamily;
    textAlign?: TextAlign;
    lineHeight?: number;
    textJustify?: TextJustify;
}

const BaseText = styled.Text<TextProps>`
    font-family: ${fontFamilies.Nunito};
    font-size: ${scale(fontSizes.normal)}px;
    color: ${props => props.theme.textColor};
    text-align: center;
`;

export const Text = (props: TextProps): JSX.Element => {
    return <BaseText {...props}>{props.text}</BaseText>;
};
