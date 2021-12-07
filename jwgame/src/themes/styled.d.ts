
import 'styled-components/native';

declare module 'styled-components' {
  export interface DefaultTheme {
    backgroundColor: string;
    primary: string;
    text: string;
    error: string;
    button: string;
  }
}

