import 'styled-components/native';
import {DefaultTheme} from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    viewBg: string;
    textColor: string;
    primaryButtonBg: string;
    primaryButtonTextColor: string;
    secondaryButtonBg: string;
    secondaryButtonTextColor: string;
  }
}

export const lightTheme: DefaultTheme = {
  viewBg: '#FFFFFF',
  textColor: '#3F414E',
  primaryButtonBg: '#5B3C88',
  primaryButtonTextColor: '#F6F1FB',
  secondaryButtonBg: '#EBEAEC',
  secondaryButtonTextColor: '#3F414E',
};

export const darkTheme: DefaultTheme = {
  viewBg: '#03174C',
  textColor: '#E6E7F2',
  primaryButtonBg: '#8E97FD',
  primaryButtonTextColor: '#F6F1FB',
  secondaryButtonBg: '#FF00A8',
  secondaryButtonTextColor: '#3F414E',
};
