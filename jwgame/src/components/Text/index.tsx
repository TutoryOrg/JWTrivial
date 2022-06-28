import React from 'react';
import {fontFamilies, fontSizes} from 'constants';
import styled from 'styled-components/native';

type TextAlign = 'center' | 'left';
type TextJustify = 'center' | 'right';
type FontFamily = keyof typeof fontFamilies;

interface TextProps {
    children: React.ReactNode;
    color?: string;
    fontSize?: number;
    fontFamily?: FontFamily;
    textAlign?: TextAlign;
    lineHeight?: number;
    textJustify?: TextJustify;
}

const BaseText = styled.Text<TextProps>`
    font-family: ${fontFamilies.Nunito};
    font-size: ${fontSizes.xLarge}px;
    color: ${props => props.theme.textColor};
    text-align: center;
`;

export const Text = (props: TextProps): JSX.Element => {
    return <BaseText {...props} />;
};
