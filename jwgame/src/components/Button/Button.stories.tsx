import React from 'react';
import {Button} from './index';
import {ThemeProvider} from 'styled-components';
import {fontSizes, gridSizes} from 'utils/constants';
import {scale, verticalScale} from 'utils/scaleFunctions';
import {ViewStoriesContainer} from 'components/ViewStories';
import {lightTheme, darkTheme} from '../../themes';
import {ComponentMeta, ComponentStory} from '@storybook/react';

const buttonNotes = ` # Button Notes`;

export default {
    title: 'components/Button',
    parameters: {
        notes: buttonNotes,
    },
    component: Button,
} as ComponentMeta<typeof Button>;

export const Basic_darkTheme: ComponentStory<typeof Button> = args => {
    return (
        <ThemeProvider theme={darkTheme}>
            <ViewStoriesContainer>
                <Button {...args} />
            </ViewStoriesContainer>
        </ThemeProvider>
    );
};

export const Basic_lightTheme: ComponentStory<typeof Button> = args => {
    return (
        <ThemeProvider theme={lightTheme}>
            <ViewStoriesContainer>
                <Button {...args} />
            </ViewStoriesContainer>
        </ThemeProvider>
    );
};

Basic_darkTheme.args = {
    text: 'Press Me',
    height: verticalScale(gridSizes.grid7x),
    width: 60,
    color: darkTheme.secondaryBnTextColor,
    backgroundColor: darkTheme.secondaryBnColor,
    fontSize: scale(fontSizes.normal),
    primary: false,
    onPressBn: () => console.log('pressed!'),
};

Basic_lightTheme.args = {
    text: 'Press Me',
    height: verticalScale(gridSizes.grid7x),
    width: 60,
    color: lightTheme.secondaryBnTextColor,
    backgroundColor: lightTheme.secondaryBnColor,
    fontSize: scale(fontSizes.xSmall),
    primary: false,
    onPressBn: () => console.log('pressed!'),
};
