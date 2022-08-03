import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {lightTheme, darkTheme} from '../../themes';
import {ThemeProvider} from 'styled-components';
import {ModalCountPoints} from '.';

export default {
    title: 'components/ModalCountPoints',
    component: ModalCountPoints,
} as ComponentMeta<typeof ModalCountPoints>;

export const Basic_darkTheme: ComponentStory<typeof ModalCountPoints> = args => {
    return (
        <ThemeProvider theme={darkTheme}>
            <ModalCountPoints {...args} />
        </ThemeProvider>
    );
};

export const Basic_lightTheme: ComponentStory<typeof ModalCountPoints> = args => {
    return (
        <ThemeProvider theme={lightTheme}>
            <ModalCountPoints {...args} />
        </ThemeProvider>
    );
};

Basic_darkTheme.args = {
    title: 'Ohh..',
    pointsGained: 0,
    pointsAcumulated: 0,
};

Basic_lightTheme.args = {
    title: 'Ohh..',
    pointsGained: 0,
    pointsAcumulated: 0,
};
