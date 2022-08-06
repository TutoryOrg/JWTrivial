import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {lightTheme, darkTheme} from '../../themes';
import {ThemeProvider} from 'styled-components';
import {ModalCountPoints} from '.';

const modalCountPointsNotes = `# Modal Count Points Notes`;

export default {
    title: 'components/ModalCountPoints',
    component: ModalCountPoints,
    parameters: {
        notes: modalCountPointsNotes,
    },
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
    pointsGained: 5,
    pointsAcumulated: 4,
    leftButtonText: 'Menu',
    rightButtonText: 'Reintentar',
    onPressLeftButton: () => console.log('Left Button Pressed!'),
    onPressRightButton: () => console.log('Right Button Pressed!'),
};

Basic_lightTheme.args = {
    title: 'Ohh..',
    pointsGained: 8,
    pointsAcumulated: 3,
    leftButtonText: 'Menu',
    rightButtonText: 'Reintentar',
    onPressLeftButton: () => console.log('Left Button Pressed!'),
    onPressRightButton: () => console.log('Right Button Pressed!'),
};
