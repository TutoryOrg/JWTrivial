import React from 'react';
import styled from 'styled-components/native';
import {gridSizes} from '@utils/constants';
import {scale} from '@utils/scaleFunctions';

const ArrowIcon = styled.Image<{
    directionArrow;
}>`
    height: ${scale(gridSizes.grid6x)}px;
    width: ${scale(gridSizes.grid6x)}px;
    transform: ${props => {
        if (props?.directionArrow === 'top') {
            return 'rotate(90deg)';
        }
        if (props?.directionArrow === 'down') {
            return 'rotate(270deg)';
        }
        if (props?.directionArrow === 'right') {
            return 'rotate(180deg)';
        }
        return 'rotate(0deg)';
    }};
    z-index: 0;
`;

const TouchableContainer = styled.TouchableOpacity`
    z-index: 1;
`;

type directionTypes = 'top' | 'right' | 'left' | 'down';

interface ArrowButtonProps {
    directionArrow?: directionTypes;
    onPress: () => void;
}

export const ArrowButton = (props: ArrowButtonProps): JSX.Element => {
    const {directionArrow, onPress, ...rest} = props;

    return (
        <TouchableContainer onPress={onPress} {...rest}>
            <ArrowIcon directionArrow={directionArrow} source={require('assets/icons/arrow.png')} />
        </TouchableContainer>
    );
};
