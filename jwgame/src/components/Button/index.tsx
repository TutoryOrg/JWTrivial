import React from 'react';
import {Text} from 'components/Text';
import {colors, gridSizes} from 'constants';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity<{
    height?: number;
    width?: number;
    primary?: boolean;
}>`
    background-color: ${props =>
        props.primary ? props.theme.primaryBnColor : props.theme.secondaryBnColor};
    height: ${gridSizes.grid7x}px;
    width: 70%;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
`;

const ButtonText = styled(Text)<{
    primary?: boolean;
}>`
    color: ${props => (props.primary ? colors.white : colors.black)};
`;

interface ButtonProps {
    children: React.ReactNode;
    text?: string;
    height?: number;
    width?: number;
    primary?: boolean;
    onPressBn?: () => void;
}

export const Button = (props: ButtonProps): JSX.Element => {
    const {onPressBn, ...rest} = props;
    return (
        <Container onPress={onPressBn} {...rest}>
            <ButtonText primary={props.primary}>{props.children}</ButtonText>
        </Container>
    );
};
