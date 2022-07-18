import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

interface OptionButtonProps {
    onPress: () => void;
}

export const OptionButton = (props: OptionButtonProps): JSX.Element => {
    const {onPress} = props;
    return (
        <TouchableOpacity onPress={onPress}>
            <Text>{'Options Button'}</Text>
        </TouchableOpacity>
    );
};
