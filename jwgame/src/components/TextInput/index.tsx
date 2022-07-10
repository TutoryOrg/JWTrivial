import React from 'react';
import {fontFamilies, fontSizes, gridSizes} from '@utils/constants';
import {scale, verticalScale} from '@utils/scaleFunctions';
import styled from 'styled-components/native';

const Container = styled.View`
    height: ${verticalScale(gridSizes.grid7x)}px;
    width: 75%;
`;

interface TextInputProps {
    isPassw?: boolean;
    label?: string;
    placeHolder?: string;
}

const TxtLabel = styled.Text<TextInputProps>`
    font-family: ${fontFamilies.Nunito};
    font-size: ${scale(fontSizes.normal)}px;
`;

const TxtInput = styled.TextInput<TextInputProps>`
    background-color: ${props => props.theme.textInputBnColor};
    height: ${verticalScale(gridSizes.grid7x)}px;
    border-radius: ${verticalScale(15)}px;
    text-align: center;
    font-size: ${scale(fontSizes.small)}px;
    font-family: ${fontFamilies.Nunito}px;
`;

export const TextInput = (props: TextInputProps): JSX.Element => {
    const {isPassw, placeHolder, label, ...rest} = props;
    return (
        <Container {...rest}>
            <TxtLabel>{label}</TxtLabel>
            <TxtInput secureTextEntry={isPassw} placeholder={placeHolder} />
        </Container>
    );
};
