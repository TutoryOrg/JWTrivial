import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {lightTheme, darkTheme} from '../../themes';
import {ThemeProvider} from 'styled-components';
import {PointsCounter} from './index';

const pointsNotes = `# Points Counter Notes`;

export default {
    title: 'components/PointsCounter',
    component: PointsCounter,
    parameters: {
        notes: pointsNotes,
    },
} as ComponentMeta<typeof PointsCounter>;

export const Basic_darkTheme: ComponentStory<typeof PointsCounter> = args => {
    return (
        <ThemeProvider theme={darkTheme}>
            <PointsCounter {...args} />
        </ThemeProvider>
    );
};

export const Basic_lightTheme: ComponentStory<typeof PointsCounter> = args => {
    return (
        <ThemeProvider theme={lightTheme}>
            <PointsCounter {...args} />
        </ThemeProvider>
    );
};

Basic_darkTheme.args = {
    counter: 4,
};

Basic_lightTheme.args = {
    counter: 4,
};
