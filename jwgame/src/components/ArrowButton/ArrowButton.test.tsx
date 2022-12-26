import 'react-native';
import React from 'react';
import {ArrowButton} from './index';
import renderer from 'react-test-renderer';

describe('test ArrowButton', () => {
    it('test Renders', () => {
        renderer.create(<ArrowButton onPress={() => console.log('onPress')} />);
    });
});
