import 'react-native';
import React from 'react';
import {DropOptions} from './index';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    renderer.create(<DropOptions />);
});
