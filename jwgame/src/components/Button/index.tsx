import React from 'react';
import {Text} from 'components/Text';
import {colors, fontSizes, gridSizes} from '@utils/constants';
import {scale, verticalScale} from '@utils/scaleFunctions';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity<{
    primary?: boolean;
}>`
    background-color: ${props =>
        props.primary ? props.theme.primaryBnColor : props.theme.secondaryBnColor};
    height: ${verticalScale(gridSizes.grid7x)}px;
    width: 70%;
    border-radius: ${verticalScale(15)}px;
    align-items: center;
    justify-content: center;
`;

const ButtonText = styled(Text)<{
    primary?: boolean;
}>`
    color: ${props => (props.primary ? colors.white : colors.black)};
    font-size: ${scale(fontSizes.normal)}px;
`;

interface ButtonProps {
    text?: string;
    primary?: boolean;
    onPressBn?: () => void;
}

export const Button = (props: ButtonProps): JSX.Element => {
    const {onPressBn, text, primary, ...rest} = props;
    return (
        <Container onPress={onPressBn} primary={primary} {...rest}>
            <ButtonText primary={primary} text={text} />
        </Container>
    );
};
