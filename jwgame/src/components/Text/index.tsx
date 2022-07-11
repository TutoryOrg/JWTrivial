import React from 'react';
import {fontFamilies, fontSizes} from '@utils/constants';
import {scale} from '@utils/scaleFunctions';
import styled from 'styled-components/native';

interface TextProps {
    text: string;
    color?: string;
    fontSize?: number;
    fontFamily?: string;
    fontWeight?: string;
    textAlign?: string;
    lineHeight?: number;
    textJustify?: string;
}

const BaseText = styled.Text<TextProps>`
    font-family: ${fontFamilies.Nunito};
    font-size: ${props => props?.fontSize ?? scale(fontSizes.normal)}px;
    color: ${props => props?.color ?? props.theme.textColor};
    text-align: center;
    font-weight: ${props => props?.fontWeight ?? 'normal'};
`;

export const Text = (props: TextProps): JSX.Element => {
    return <BaseText {...props}>{props.text}</BaseText>;
};
