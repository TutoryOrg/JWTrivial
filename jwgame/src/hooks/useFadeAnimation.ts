import {useEffect, useRef} from 'react';
import {Animated} from 'react-native';

interface useFadeAnimationProps {
    fromValue: number;
    toValue: number;
    duration: number;
}

export const useFadeAnimation = (props: useFadeAnimationProps): {fadeAnim: Animated.Value} => {
    const {fromValue, toValue, duration} = props;
    const fadeAnim = useRef(new Animated.Value(fromValue)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: true,
        }).start();
    }, [fadeAnim]);

    return {fadeAnim};
};
