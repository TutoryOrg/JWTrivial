import React from 'react';
import {Text} from 'components/Text';
import {colors, fontSizes, gridSizes} from '@utils/constants';
import {scale, verticalScale} from '@utils/scaleFunctions';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity<{
    primary?: boolean;
    height?: number;
    width?: number;
    backgroundColor?: string;
}>`
    background-color: ${props =>
        props.primary
            ? props.theme.primaryBnColor
            : props.backgroundColor ?? props.theme.secondaryBnColor};
    height: ${props => props?.height ?? verticalScale(gridSizes.grid7x)}px;
    width: ${props => props?.width ?? 70}%;
    border-radius: ${verticalScale(15)}px;
    align-items: center;
    justify-content: center;
`;

const ButtonText = styled(Text)<{
    primary?: boolean;
    fontSize?: string;
    color?: string;
}>`
    color: ${props => (props.primary ? colors.white : props?.color ?? colors.black)};
    font-size: ${props => props?.fontSize ?? scale(fontSizes.xSmall)}px;
    font-weight: bold;
`;

interface ButtonProps {
    text?: string;
    height?: number;
    width?: number;
    fontSize?: number;
    color?: string;
    primary?: boolean;
    backgroundColor?: string;
    onPressBn?: () => void;
}

export const Button = (props: ButtonProps): JSX.Element => {
    const {onPressBn, text, primary, ...rest} = props;
    return (
        <Container onPress={onPressBn} primary={primary} {...rest}>
            <ButtonText primary={primary} text={text?.toUpperCase()} />
        </Container>
    );
};
