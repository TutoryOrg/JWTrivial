import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {lightTheme, darkTheme} from '../../themes';
import {ThemeProvider} from 'styled-components';
import {TextInput} from './index';

export default {
    title: 'components/TextInput',
    component: TextInput,
} as ComponentMeta<typeof TextInput>;

export const Basic_darkTheme: ComponentStory<typeof TextInput> = args => {
    return (
        <ThemeProvider theme={darkTheme}>
            <TextInput {...args} />
        </ThemeProvider>
    );
};

export const Basic_lightTheme: ComponentStory<typeof TextInput> = args => {
    return (
        <ThemeProvider theme={lightTheme}>
            <TextInput {...args} />
        </ThemeProvider>
    );
};

Basic_darkTheme.args = {
    isPassw: false,
    placeHolder: 'PlaceHolder',
    label: 'Label',
};

Basic_lightTheme.args = {
    isPassw: false,
    placeHolder: 'PlaceHolder',
    label: 'Label',
};
