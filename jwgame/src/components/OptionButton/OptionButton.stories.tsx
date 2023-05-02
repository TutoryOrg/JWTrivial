import React from 'react';
import {OptionButton} from './index';
import {ThemeProvider} from 'styled-components';
import {ViewStoriesContainer} from 'components/ViewStories';
import {lightTheme, darkTheme} from '../../themes';
import {ComponentMeta, ComponentStory} from '@storybook/react';

const optionNotes = `# Option Button Notes`;

export default {
    title: 'components/OptionButton',
    component: OptionButton,
    parameters: {
        notes: optionNotes,
    },
} as ComponentMeta<typeof OptionButton>;

export const Basic_darkTheme: ComponentStory<typeof OptionButton> = args => {
    return (
        <ThemeProvider theme={darkTheme}>
            <ViewStoriesContainer>
                <OptionButton {...args} />
            </ViewStoriesContainer>
        </ThemeProvider>
    );
};

export const Basic_lightTheme: ComponentStory<typeof OptionButton> = args => {
    return (
        <ThemeProvider theme={lightTheme}>
            <ViewStoriesContainer>
                <OptionButton {...args} />
            </ViewStoriesContainer>
        </ThemeProvider>
    );
};

Basic_darkTheme.args = {
    optionText: 'A',
    description: 'primary description',
    subDescription: 'sub description',
    isSelected: false,
    onPress: () => console.log('Pressed!'),
};

Basic_lightTheme.args = {
    optionText: 'A',
    description: 'primary description',
    subDescription: 'sub description',
    isSelected: false,
    onPress: () => console.log('Pressed!'),
};
