import 'styled-components/native';
import { DefaultTheme } from "styled-components";

declare module 'styled-components' {
  export interface DefaultTheme {
    backgroundColor: string;
    primary: string;
    text: string;
    error: string;
    button: string;
  }
}

export const lightTheme: DefaultTheme = {
  backgroundColor: '#E2E2E2',
  primary: '#DDD537',
  text: '#FFFFFF',
  error: 'linear-gradient(#39598A, #79D7ED)',
  button: '#FFAAAA',
};

export const darkTheme: DefaultTheme = {
  backgroundColor: '#E63537',
  primary: '#FAFAFA',
  text: '#6B8096',
  error: 'linear-gradient(#091236, #1E215D)',
  button: '#000F00',
};
