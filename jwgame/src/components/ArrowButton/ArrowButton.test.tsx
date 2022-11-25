import 'react-native';
import React from 'react';
import {ArrowButton} from './index';
import renderer from 'react-test-renderer';

describe('ArrowButton', () => {
    it('It Renders', () => {
        renderer.create(<ArrowButton onPress={() => console.log('onPress')} />);
    });

    it('It crashes', () => {
        renderer.create(
            <ArrowButton onPress={() => console.log('onPress')} directionArrow={'down'} />
        );
    });
});
