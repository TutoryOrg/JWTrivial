import React from 'react';
import {ArrowButton} from './index';
import {ThemeProvider} from 'styled-components';
import {ViewStoriesContainer} from 'components/ViewStories';
import {lightTheme, darkTheme} from 'themes';
import {ComponentMeta, ComponentStory} from '@storybook/react';

const arrowNotes = `
# Arrow Button Notes

This button is used to navigate between screens.
`;

export default {
    title: 'components/ArrowButton',
    component: ArrowButton,
    parameters: {
        notes: arrowNotes,
    },
    argTypes: {
        directionArrow: {
            options: ['top', 'left', 'right', 'down'],
            control: {type: 'select'},
        },
    },
} as ComponentMeta<typeof ArrowButton>;

export const Basic_darkTheme: ComponentStory<typeof ArrowButton> = args => {
    return (
        <ThemeProvider theme={darkTheme}>
            <ViewStoriesContainer>
                <ArrowButton {...args} />
            </ViewStoriesContainer>
        </ThemeProvider>
    );
};

export const Basic_lightTheme: ComponentStory<typeof ArrowButton> = args => {
    return (
        <ThemeProvider theme={lightTheme}>
            <ViewStoriesContainer>
                <ArrowButton {...args} />
            </ViewStoriesContainer>
        </ThemeProvider>
    );
};

Basic_darkTheme.args = {
    directionArrow: 'top',
    onPress: () => console.log('Pressed!'),
};

Basic_lightTheme.args = {
    directionArrow: 'top',
    onPress: () => console.log('Pressed!'),
};
