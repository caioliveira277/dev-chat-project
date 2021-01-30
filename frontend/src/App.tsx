import React from 'react';
import { GlobalStyle, light } from 'theme';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
