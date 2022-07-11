import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {lightTheme, darkTheme} from '../../themes';
import {fontSizes} from '@utils/constants';
import {ThemeProvider} from 'styled-components';
import {scale} from '@utils/scaleFunctions';
import {Text} from './index';

export default {
    title: 'components/Text',
    component: Text,
} as ComponentMeta<typeof Text>;

export const Basic_darkTheme: ComponentStory<typeof Text> = args => {
    return (
        <ThemeProvider theme={darkTheme}>
            <Text {...args} />
        </ThemeProvider>
    );
};

export const Basic_lightTheme: ComponentStory<typeof Text> = args => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Text {...args} />
        </ThemeProvider>
    );
};

Basic_darkTheme.args = {
    text: 'Hello World',
    color: darkTheme.textColor,
    fontWeight: 'normal',
    fontSize: scale(fontSizes.normal),
};

Basic_lightTheme.args = {
    text: 'Hello World',
    color: lightTheme.textColor,
    fontWeight: undefined,
    fontSize: scale(fontSizes.normal),
};
