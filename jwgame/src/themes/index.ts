import 'styled-components/native';
import {DefaultTheme} from 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        viewBg: string;
        textColor: string;
        primaryBnColor: string;
        primaryBnTextColor: string;
        secondaryBnColor: string;
        secondaryBnTextColor: string;
        textInputBnColor: string;
    }
}

export const lightTheme: DefaultTheme = {
    viewBg: '#A3ABFF',
    textColor: '#EBEAEC',
    primaryBnColor: '#5B3C88',
    primaryBnTextColor: '#F6F1FB',
    secondaryBnColor: '#EBEAEC',
    secondaryBnTextColor: '#3F414E',
    textInputBnColor: '#D7D7DF',
};

export const darkTheme: DefaultTheme = {
    viewBg: '#8E97FD',
    textColor: '#06E7F2',
    primaryBnColor: '#5B3C88',
    primaryBnTextColor: '#F6F1FB',
    secondaryBnColor: '#FF00A8',
    secondaryBnTextColor: '#3F414E',
    textInputBnColor: '#800080',
};
