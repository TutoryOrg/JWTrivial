import 'react-native';
import React from 'react';
import {ArrowButton} from './index';
import renderer from 'react-test-renderer';

describe('ArrowButton', () => {
    const defaultProps = {
        directionArrow: undefined,
        onPress: () => console.log(''),
    };

    it('components renders', () => {
        renderer.create(<ArrowButton {...defaultProps} />);
    });

    it('renders directionArrow up', () => {
        renderer.create(<ArrowButton {...defaultProps} directionArrow="top" />);
    });

    it('renders directionArrow down', () => {
        renderer.create(<ArrowButton {...defaultProps} directionArrow="down" />);
    });

    it('renders directionArrow right', () => {
        renderer.create(<ArrowButton {...defaultProps} directionArrow="right" />);
    });
});
