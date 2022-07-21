import React from 'react';
import styled from 'styled-components/native';
import {gridSizes} from '@utils/constants';
import {scale} from '@utils/scaleFunctions';
import {TouchableOpacity} from 'react-native';

const ArrowIcon = styled.Image<{
    direction;
}>`
    height: ${scale(gridSizes.grid6x)}px;
    width: ${scale(gridSizes.grid6x)}px;
    transform: ${props => {
        if (props?.direction === 'top') {
            return 'rotate(90deg)';
        }
        if (props?.direction === 'down') {
            return 'rotate(270deg)';
        }
        if (props?.direction === 'right') {
            return 'rotate(180deg)';
        }
        return 'rotate(0deg)';
    }};
    z-index: 10;
`;

type directionTypes = 'top' | 'right' | 'left' | 'down';

interface ArrowButtonProps {
    direction?: directionTypes;
    onPress: () => void;
}

export const ArrowButton = (props: ArrowButtonProps): JSX.Element => {
    const {direction, onPress, ...rest} = props;

    return (
        <TouchableOpacity onPress={onPress} {...rest}>
            <ArrowIcon direction={direction} source={require('assets/icons/arrow.png')} />
        </TouchableOpacity>
    );
};
