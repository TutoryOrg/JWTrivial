import 'react-native';
import React from 'react';
import {DropOptions} from './index';
import {render, screen, fireEvent} from '@testing-library/react-native';
import {ViewStoriesContainer} from '../ViewStories';

describe('DropOptions', () => {
    const renderComponent = props => {
        return (
            <ViewStoriesContainer>
                <DropOptions {...props} />
            </ViewStoriesContainer>
        );
    };

    it('component renders', () => {
        renderComponent();
    });

    it('component toggles', () => {
        render(renderComponent());
        expect(screen.getByTestId('drop-options')).toBeDefined();

        const dropOptions = screen.getByTestId('drop-options');
        fireEvent.press(dropOptions);
    });
});
