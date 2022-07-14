import React, {useState} from 'react';
import {fontFamilies, fontSizes, gridSizes} from '@utils/constants';
import {scale, verticalScale} from '@utils/scaleFunctions';
import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';

const Container = styled.View`
    flex: 1;
    height: ${verticalScale(gridSizes.grid7x)}px;
    width: 70%;
`;

const ContainerInput = styled.View`
    flex-direction: row;
    align-items: center;
`;

const TxtLabel = styled.Text<TextInputProps>`
    font-family: ${fontFamilies.Nunito};
    font-size: ${scale(fontSizes.normal)}px;
`;

const TxtInput = styled.TextInput<TextInputProps>`
    background-color: ${props => props.theme.textInputBnColor};
    height: ${verticalScale(gridSizes.grid10x)}px;
    width: 100%;
    border-radius: ${verticalScale(15)}px;
    text-align: center;
    font-size: ${scale(fontSizes.small)}px;
    font-family: ${fontFamilies.Nunito}px;
`;

const EyeIcon = styled.Image`
    height: ${scale(gridSizes.grid6x)}px;
    width: ${scale(gridSizes.grid6x)}px;
    right: ${scale(gridSizes.grid8x)}px;
    z-index: 10;
`;

interface TextInputProps {
    isSecret?: boolean;
    isEditable?: boolean;
    label?: string;
    placeHolder?: string;
    defaultValue?: string;
}
export const TextInput = (props: TextInputProps): JSX.Element => {
    const {isSecret, isEditable, placeHolder, label, defaultValue, ...rest} = props;
    const [hideText, setHideText] = useState(isSecret);

    return (
        <Container {...rest}>
            <TxtLabel>{label}</TxtLabel>
            <ContainerInput>
                <TxtInput
                    defaultValue={defaultValue}
                    editable={isEditable}
                    secureTextEntry={hideText}
                    placeholder={placeHolder}
                    maxLength={20}
                />
                {isSecret &&
                    (hideText ? (
                        <TouchableOpacity onPress={() => setHideText(false)}>
                            <EyeIcon source={require('assets/icons/eye_hidden.png')} />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity onPress={() => setHideText(true)}>
                            <EyeIcon source={require('assets/icons/eye.png')} />
                        </TouchableOpacity>
                    ))}
            </ContainerInput>
        </Container>
    );
};
