import React from 'react';
import {DropOptions} from './index';
import {ThemeProvider} from 'styled-components';
import {ViewStoriesContainer} from 'components/ViewStories';
import {lightTheme, darkTheme} from '../../themes';
import {ComponentMeta, ComponentStory} from '@storybook/react';

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
    title: 'Language',
    subTitle: 'English',
    iconSource: require('assets/icons/language.png'),
    options: [
        {text: 'Español', icon: require('assets/icons/spain.png')},
        {text: 'English', icon: require('assets/icons/britain.png')},
    ],
};

Basic_lightTheme.args = {
    title: 'Theme',
    subTitle: 'light',
    iconSource: require('assets/icons/dark_light.png'),
    options: [{text: 'Light'}, {text: 'Dark'}],
};
