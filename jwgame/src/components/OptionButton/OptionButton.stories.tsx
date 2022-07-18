import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {lightTheme, darkTheme} from '../../themes';
import {ThemeProvider} from 'styled-components';
import {OptionButton} from './index';

export default {
    title: 'components/OptionButton',
    component: OptionButton,
} as ComponentMeta<typeof OptionButton>;

export const Basic_darkTheme: ComponentStory<typeof OptionButton> = args => {
    return (
        <ThemeProvider theme={darkTheme}>
            <OptionButton {...args} />
        </ThemeProvider>
    );
};

export const Basic_lightTheme: ComponentStory<typeof OptionButton> = args => {
    return (
        <ThemeProvider theme={lightTheme}>
            <OptionButton {...args} />
        </ThemeProvider>
    );
};

Basic_darkTheme.args = {
    onPress: () => console.log('Pressed!'),
};

Basic_lightTheme.args = {
    onPress: () => console.log('Pressed!'),
};
