import React from 'react';
import styled from 'styled-components/native';
import {Text} from 'components/Text';
import {colors, fontFamilies, gridSizes} from '@utils/constants';
import {moderateScale, scale, verticalScale} from '@utils/scaleFunctions';

const ButtonContainer = styled.TouchableOpacity<{
    color: string;
}>`
    background-color: ${props => props?.color ?? '#08cfb4'};
    width: ${scale(gridSizes.grid18x)}px;
    height: ${verticalScale(gridSizes.grid15x)}px;
    border-radius: ${scale(gridSizes.grid2x)}px;
`;

const TextContainer = styled(Text)`
    position: absolute;
    bottom: ${moderateScale(gridSizes.grid3x)}px;
    left: ${moderateScale(gridSizes.grid2x)}px;
    font-family: ${fontFamilies.NunitoBold};
    color: ${colors.primaryGray};
`;

interface MenuButton {
    text: string;
    color: string;
    textColor?: string;
    onPress: () => void;
}

export const MenuButton = (props: MenuButton): JSX.Element => {
    const {onPress, text, color, ...rest} = props;

    return (
        <ButtonContainer onPress={onPress} color={color} {...rest}>
            <TextContainer text={text} />
        </ButtonContainer>
    );
};
