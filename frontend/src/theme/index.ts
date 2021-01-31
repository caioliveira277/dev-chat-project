import { createGlobalStyle, DefaultTheme } from 'styled-components';
import { darken, lighten } from 'polished';

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
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scrollbar-width: thin;
  }
  ::-webkit-scrollbar-track {
    background: ${({theme}) => lighten(0.1, theme.colors.tertiary)};
  }
  ::-webkit-scrollbar {
      width: 5px;
  }
  ::-webkit-scrollbar-thumb {
      border-radius: 20px;
      background: ${({theme}) => darken(0.3, theme.colors.contrast)};
  }
  body {
    background: ${({theme}) => theme.colors.contrast};
  }
  a {
    color: #16739a;
    &:hover {
      color: ${darken(0.1, '#16739a')};
    }
  }
  h1, h2, h3, p, label {
    color: ${({theme}) => theme.colors.tertiary};
  }
  input::placeholder {
    color: #A8A8A8;
  }
`;