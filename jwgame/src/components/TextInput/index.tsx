import React from 'react';
import {fontFamilies, fontSizes, gridSizes} from 'constants';
import styled from 'styled-components/native';

const Container = styled.View`
    height: ${gridSizes.grid7x}px;
    width: 75%;
`;

interface TextInputProps {
    isPassw?: boolean;
    label?: string;
    value?: string;
    placeHolder?: string;
}

const TxtLabel = styled.Text<TextInputProps>`
    font-family: ${fontFamilies.Nunito};
    font-size: ${fontSizes.normal}px;
`;

const TxtInput = styled.TextInput<TextInputProps>`
    background-color: ${props => props.theme.textInputBnColor};
    border-radius: 10px;
    text-align: center;
    font-size: ${fontSizes.small}px;
    font-family: ${fontFamilies.Nunito}px;
`;

export const TextInput = (props: TextInputProps): JSX.Element => {
    const {isPassw, placeHolder, label, ...rest} = props;
    return (
        <Container {...rest}>
            <TxtLabel {...rest}>{label}</TxtLabel>
            <TxtInput {...rest} secureTextEntry={isPassw} placeholder={placeHolder} />
        </Container>
    );
};
