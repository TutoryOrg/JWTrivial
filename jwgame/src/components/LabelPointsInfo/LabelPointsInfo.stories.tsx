import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {lightTheme, darkTheme} from '../../themes';
import {ThemeProvider} from 'styled-components';
import {LabelPointsInfo} from './index';
import {ViewStoriesContainer} from 'components/ViewStories';

const lableNotes = `
# Label Poinst Info Notes

`;

export default {
    title: 'components/LabelPointsInfo',
    component: LabelPointsInfo,
    parameters: {
        notes: lableNotes,
    },
    argTypes: {},
} as ComponentMeta<typeof LabelPointsInfo>;

export const Basic_darkTheme: ComponentStory<typeof LabelPointsInfo> = args => {
    return (
        <ThemeProvider theme={darkTheme}>
            <ViewStoriesContainer>
                <LabelPointsInfo {...args} />
            </ViewStoriesContainer>
        </ThemeProvider>
    );
};

export const Basic_lightTheme: ComponentStory<typeof LabelPointsInfo> = args => {
    return (
        <ThemeProvider theme={lightTheme}>
            <ViewStoriesContainer>
                <LabelPointsInfo {...args} />
            </ViewStoriesContainer>
        </ThemeProvider>
    );
};

Basic_darkTheme.args = {
    text: 'Total Correct',
    points: 9,
};

Basic_lightTheme.args = {
    text: 'Total Wrong',
    points: 9,
};
