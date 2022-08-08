import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {lightTheme, darkTheme} from '../../themes';
import {ThemeProvider} from 'styled-components';
import {TextInput} from './index';
import {ViewStoriesContainer} from '@components/ViewStories';

const TextInputNotes = `# Text Input Notes`;

export default {
    title: 'components/TextInput',
    component: TextInput,
    parameters: {
        notes: TextInputNotes,
    },
} as ComponentMeta<typeof TextInput>;

export const Basic_darkTheme: ComponentStory<typeof TextInput> = args => {
    return (
        <ThemeProvider theme={darkTheme}>
            <ViewStoriesContainer>
                <TextInput {...args} />
            </ViewStoriesContainer>
        </ThemeProvider>
    );
};

export const Basic_lightTheme: ComponentStory<typeof TextInput> = args => {
    return (
        <ThemeProvider theme={lightTheme}>
            <ViewStoriesContainer>
                <TextInput {...args} />
            </ViewStoriesContainer>
        </ThemeProvider>
    );
};

Basic_darkTheme.args = {
    isSecret: true,
    isEditable: true,
    placeHolder: 'password',
    label: 'Password',
    defaultValue: '',
};

Basic_lightTheme.args = {
    isSecret: true,
    isEditable: false,
    placeHolder: 'PlaceHolder',
    label: 'Label',
    defaultValue: 'clue',
};
