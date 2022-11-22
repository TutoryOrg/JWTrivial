import 'react-native';
import React from 'react';
import {ArrowButton} from './index';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    renderer.create(<ArrowButton />);
});
