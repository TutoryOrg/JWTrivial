import React from 'react';
import {StyleSheet, View} from 'react-native';

interface ViewStoriesProps {
    children: JSX.Element;
}

export const ViewStoriesContainer = ({children}: ViewStoriesProps): JSX.Element => {
    return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        top: '10%',
    },
});
