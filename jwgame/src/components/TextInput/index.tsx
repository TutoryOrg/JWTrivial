import React, {useState} from 'react';
import {scale, verticalScale} from 'utils/scaleFunctions';
import {fontFamilies, fontSizes, gridSizes} from 'utils/constants';
import styled from 'styled-components/native';

const Container = styled.View`
    height: ${verticalScale(gridSizes.grid6x)}px;
    width: 70%;
`;

const ContainerInput = styled.View`
    flex-direction: row;
    align-items: center;
`;

const TxtLabel = styled.Text<TextInputProps>`
    font-family: ${fontFamilies.Nunito};
    font-size: ${scale(fontSizes.large)}px;
`;

const TxtInput = styled.TextInput<TextInputProps>`
    background-color: ${props => props.theme.textInputBnColor};
    height: ${verticalScale(gridSizes.grid9x)}px;
    width: 100%;
    border-radius: ${verticalScale(15)}px;
    text-align: center;
    font-size: ${scale(fontSizes.small)}px;
    font-family: ${fontFamilies.Nunito};
`;

const EyeTouchableContainer = styled.TouchableOpacity`
    right: ${scale(gridSizes.grid10x)}px;
    height: 100%;
    width: 15%;
    align-items: center;
    justify-content: center;
`;

const EyeIcon = styled.Image`
    height: ${scale(gridSizes.grid5x)}px;
    width: ${scale(gridSizes.grid5x)}px;
`;

interface TextInputProps {
    isSecret: boolean;
    isEditable: boolean;
    label: string;
    placeHolder: string;
    defaultValue: string;
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

                {isSecret && (
                    <EyeTouchableContainer onPress={() => setHideText(!hideText)}>
                        <EyeIcon
                            source={
                                hideText
                                    ? require('assets/icons/eye_hidden.png')
                                    : require('assets/icons/eye.png')
                            }
                        />
                    </EyeTouchableContainer>
                )}
            </ContainerInput>
        </Container>
    );
};
