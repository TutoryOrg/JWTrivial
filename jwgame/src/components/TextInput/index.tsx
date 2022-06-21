import React from 'react';
import {fontFamilies, fontSizes} from 'constants';
import styled from 'styled-components/native';

const Container = styled.View`
    position: absolute;
    height: 55px;
    width: 85%;
`;

interface TextInputProps {
    isPassw?: boolean;
    label?: string;
    value?: string;
    placeHolder?: string;
}

const TxtLabel = styled.Text<TextInputProps>`
    font-family: ${fontFamilies.Nunito};
    font-size: ${fontSizes.large}px;
`;

const TxtInput = styled.TextInput<TextInputProps>`
    background-color: ${props => props.theme.textInputBnColor};
    border-radius: 10px;
    text-align: center;
    font-size: ${fontSizes.normal}px;
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
