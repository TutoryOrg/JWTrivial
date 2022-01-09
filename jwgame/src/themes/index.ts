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
  viewBg: '#FFFFFF',
  textColor: '#3F414E',
  primaryBnColor: '#9AA2FD',
  primaryBnTextColor: '#F6F1FB',
  secondaryBnColor: '#EBEAEC',
  secondaryBnTextColor: '#3F414E',
  textInputBnColor: '#F2F3F7',
};

export const darkTheme: DefaultTheme = {
  viewBg: '#9AA2FD',
  textColor: '#E6E7F2',
  primaryBnColor: '#5B3C88',
  primaryBnTextColor: '#F6F1FB',
  secondaryBnColor: '#FF00A8',
  secondaryBnTextColor: '#3F414E',
  textInputBnColor: '#F2E3B5',
};
