import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {lightTheme, darkTheme} from '../../themes';
import {ThemeProvider} from 'styled-components';
import {DropOptions} from './index';

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
            <DropOptions {...args} />
        </ThemeProvider>
    );
};

export const Basic_lightTheme: ComponentStory<typeof DropOptions> = args => {
    return (
        <ThemeProvider theme={lightTheme}>
            <DropOptions {...args} />
        </ThemeProvider>
    );
};

Basic_darkTheme.args = {};

Basic_lightTheme.args = {};
