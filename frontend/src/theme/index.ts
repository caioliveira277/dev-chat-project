import { createGlobalStyle, DefaultTheme } from 'styled-components';

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
  }

  body {
    background: ${({theme}) => theme.colors.contrast};
  }
`;