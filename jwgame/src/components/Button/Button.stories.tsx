import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {lightTheme, darkTheme} from '../../themes';
import {ThemeProvider} from 'styled-components';
import {Button} from './index';

export default {
    title: 'components/Button',
    component: Button,
} as ComponentMeta<typeof Button>;

export const Basic_darkTheme: ComponentStory<typeof Button> = args => {
    return (
        <ThemeProvider theme={darkTheme}>
            <Button {...args} />
        </ThemeProvider>
    );
};

export const Basic_lightTheme: ComponentStory<typeof Button> = args => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Button {...args} />
        </ThemeProvider>
    );
};

Basic_darkTheme.args = {
    text: 'Hello World',
    primary: false,
};

Basic_lightTheme.args = {
    text: 'Hello World',
    primary: true,
};
