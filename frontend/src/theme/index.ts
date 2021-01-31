import { createGlobalStyle, DefaultTheme } from 'styled-components';
import { darken } from 'polished';

export type validColors = 'primary'|'secondary'|'tertiary'|'contrast';
export const light: DefaultTheme = {
  title: 'light',
  colors: {
    primary: '#5ACF93',
    secondary: '#FAFAFA',
    tertiary: '#292C2B',
    contrast: '#EBEBEB'
  }
}
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
  }
  h1, h2, h3, p, label {
    color: ${({theme}) => theme.colors.tertiary};
  }
  input::placeholder {
    color: #A8A8A8;
  }
  a {
    color: #16739a;
    &:hover {
      color: ${darken(0.1, '#16739a')};
    }
  }

  body {
    background: ${({theme}) => theme.colors.contrast};
  }
`;