import React from 'react';
import {Timer} from './index';
import {ThemeProvider} from 'styled-components';
import {lightTheme, darkTheme} from '../../themes';
import {ComponentMeta, ComponentStory} from '@storybook/react';

export default {
    title: 'components/Timer',
    component: Timer,
} as ComponentMeta<typeof Timer>;

export const Basic_darkTheme: ComponentStory<typeof Timer> = args => {
    return (
        <ThemeProvider theme={darkTheme}>
            <Timer {...args} />
        </ThemeProvider>
    );
};

export const Basic_lightTheme: ComponentStory<typeof Timer> = args => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Timer {...args} />
        </ThemeProvider>
    );
};

Basic_darkTheme.args = {};

Basic_lightTheme.args = {};
