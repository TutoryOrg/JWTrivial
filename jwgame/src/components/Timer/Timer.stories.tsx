import React from 'react';
import {Timer} from './index';
import {ThemeProvider} from 'styled-components';
import {ViewStoriesContainer} from 'components/ViewStories';
import {lightTheme, darkTheme} from '../../themes';
import {ComponentMeta, ComponentStory} from '@storybook/react';

const TimerNotes = `# Timer Notes`;

export default {
    title: 'components/Timer',
    component: Timer,
    parameters: {
        notes: TimerNotes,
    },
} as ComponentMeta<typeof Timer>;

export const Basic_darkTheme: ComponentStory<typeof Timer> = args => {
    return (
        <ThemeProvider theme={darkTheme}>
            <ViewStoriesContainer>
                <Timer {...args} />
            </ViewStoriesContainer>
        </ThemeProvider>
    );
};

export const Basic_lightTheme: ComponentStory<typeof Timer> = args => {
    return (
        <ThemeProvider theme={lightTheme}>
            <ViewStoriesContainer>
                <Timer {...args} />
            </ViewStoriesContainer>
        </ThemeProvider>
    );
};

Basic_darkTheme.args = {
    minutes: 1,
    seconds: 3,
    onTimeUp: () => console.log('Time up!'),
};

Basic_lightTheme.args = {
    minutes: 1,
    seconds: 3,
    onTimeUp: () => console.log('Time up!'),
};
