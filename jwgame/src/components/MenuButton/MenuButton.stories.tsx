import React from 'react';
import {colors} from 'utils/constants';
import {MenuButton} from './index';
import {ThemeProvider} from 'styled-components';
import {ViewStoriesContainer} from 'components/ViewStories';
import {lightTheme, darkTheme} from '../../themes';
import {ComponentMeta, ComponentStory} from '@storybook/react';

const menuButtonNotes = `# Menu Button Notes`;

export default {
    title: 'components/MenuButton',
    component: MenuButton,
    parameters: {
        notes: menuButtonNotes,
    },
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
            <ViewStoriesContainer>
                <MenuButton {...args} />
            </ViewStoriesContainer>
        </ThemeProvider>
    );
};

export const Basic_lightTheme: ComponentStory<typeof MenuButton> = args => {
    return (
        <ThemeProvider theme={lightTheme}>
            <ViewStoriesContainer>
                <MenuButton {...args} />
            </ViewStoriesContainer>
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
