import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {lightTheme, darkTheme} from '../../themes';
import {ThemeProvider} from 'styled-components';
import {MenuButton} from './index';
import {colors} from '@utils/constants';

export default {
    title: 'components/MenuButton',
    component: MenuButton,
    argTypes: {
        color: {
            options: [
                colors.menuPurple,
                colors.menuOrange,
                colors.menuPale,
                colors.menuYellow,
                colors.menuBlue,
                colors.menuPink,
            ],
            control: {type: 'select'},
        },
    },
} as ComponentMeta<typeof MenuButton>;

export const Basic_darkTheme: ComponentStory<typeof MenuButton> = args => {
    return (
        <ThemeProvider theme={darkTheme}>
            <MenuButton {...args} />
        </ThemeProvider>
    );
};

export const Basic_lightTheme: ComponentStory<typeof MenuButton> = args => {
    return (
        <ThemeProvider theme={lightTheme}>
            <MenuButton {...args} />
        </ThemeProvider>
    );
};

Basic_darkTheme.args = {
    color: colors.menuBlue,
    text: 'Quién dijo ... ?',
    onPress: () => console.log('Pressed!'),
};

Basic_lightTheme.args = {
    color: colors.menuBlue,
    text: 'Quién dijo ... ?',
    onPress: () => console.log('Pressed!'),
};
