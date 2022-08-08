import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {lightTheme, darkTheme} from '../../themes';
import {ThemeProvider} from 'styled-components';
import {DropOptions} from './index';
import {ViewStoriesContainer} from '@components/ViewStories';

const dropNotes = `
# Dropdown Options Notes 
`;

export default {
    title: 'components/DropOptions',
    component: DropOptions,
    parameters: {
        notes: dropNotes,
    },
} as ComponentMeta<typeof DropOptions>;

export const Basic_darkTheme: ComponentStory<typeof DropOptions> = args => {
    return (
        <ThemeProvider theme={darkTheme}>
            <ViewStoriesContainer>
                <DropOptions {...args} />
            </ViewStoriesContainer>
        </ThemeProvider>
    );
};

export const Basic_lightTheme: ComponentStory<typeof DropOptions> = args => {
    return (
        <ThemeProvider theme={lightTheme}>
            <ViewStoriesContainer>
                <DropOptions {...args} />
            </ViewStoriesContainer>
        </ThemeProvider>
    );
};

Basic_darkTheme.args = {
    title: 'Timer',
    subTitle: '2:20',
    iconSource: require('assets/icons/clock.png'),
};

Basic_lightTheme.args = {
    title: 'Theme',
    subTitle: 'light',
    iconSource: require('assets/icons/dark_light.png'),
};
